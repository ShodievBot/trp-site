import crypto from "crypto";
import { cookies } from "next/headers";
import { getStoredAdminPasswordHash } from "@/lib/adminPassword";

export const ADMIN_COOKIE_NAME = "trp_admin_session";
export const ADMIN_SESSION_SECONDS = 60 * 60 * 24 * 7;

function getSecret() {
  const secret = process.env.ADMIN_SECRET;

  if (secret) return secret;

  // Without ADMIN_SECRET production refuses every session instead of using a guessable key.
  return process.env.NODE_ENV === "production" ? null : "dev-secret";
}

// Changes whenever the admin password changes, which invalidates every issued token.
async function getPasswordFingerprint() {
  const current = (await getStoredAdminPasswordHash()) ?? process.env.ADMIN_PASSWORD ?? "";
  return crypto.createHash("sha256").update(current).digest("hex");
}

function sign(secret: string, payload: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

/** Token format: `<issuedAtSeconds>.<hmac(issuedAt.passwordFingerprint)>` */
export async function createAdminToken() {
  const secret = getSecret();
  if (!secret) throw new Error("ADMIN_SECRET is not configured.");

  const issuedAt = Math.floor(Date.now() / 1000).toString();
  return `${issuedAt}.${sign(secret, `${issuedAt}.${await getPasswordFingerprint()}`)}`;
}

export async function verifyAdminToken(token?: string) {
  const secret = getSecret();
  if (!token || !secret) return false;

  const [issuedAt, signature] = token.split(".");
  const issuedSeconds = Number(issuedAt);
  const age = Math.floor(Date.now() / 1000) - issuedSeconds;

  if (!signature || !Number.isInteger(issuedSeconds) || age < 0 || age > ADMIN_SESSION_SECONDS) {
    return false;
  }

  const expected = sign(secret, `${issuedAt}.${await getPasswordFingerprint()}`);

  try {
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function isAdminRequest() {
  const cookieStore = await cookies();
  return verifyAdminToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value);
}
