import crypto from "crypto";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

const PASSWORD_KEY = "admin_password_hash";

function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");

  return `scrypt:${salt}:${hash}`;
}

function verifyHash(password: string, stored: string) {
  const [method, salt, hash] = stored.split(":");

  if (method !== "scrypt" || !salt || !hash) {
    return false;
  }

  const candidate = crypto.scryptSync(password, salt, 64).toString("hex");

  try {
    return crypto.timingSafeEqual(Buffer.from(candidate), Buffer.from(hash));
  } catch {
    return false;
  }
}

export async function getStoredAdminPasswordHash() {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("admin_settings")
    .select("value")
    .eq("key", PASSWORD_KEY)
    .maybeSingle();

  if (error || !data?.value) {
    return null;
  }

  return data.value as string;
}

export async function verifyAdminPassword(password: string) {
  const storedHash = await getStoredAdminPasswordHash();

  if (storedHash) {
    return verifyHash(password, storedHash);
  }

  const envPassword = process.env.ADMIN_PASSWORD;

  if (!envPassword) {
    return false;
  }

  return password === envPassword;
}

export async function changeAdminPassword(currentPassword: string, newPassword: string) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return {
      ok: false,
      error: "Supabase is not configured. Password cannot be changed from admin panel.",
    };
  }

  const currentValid = await verifyAdminPassword(currentPassword);

  if (!currentValid) {
    return {
      ok: false,
      error: "Current password is incorrect.",
    };
  }

  if (newPassword.trim().length < 8) {
    return {
      ok: false,
      error: "New password must contain at least 8 characters.",
    };
  }

  const nextHash = hashPassword(newPassword);

  const { error } = await supabase.from("admin_settings").upsert({
    key: PASSWORD_KEY,
    value: nextHash,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    return {
      ok: false,
      error: error.message || "Failed to update password.",
    };
  }

  return {
    ok: true,
  };
}
