"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginForm() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form className="adminLoginForm" onSubmit={handleSubmit}>
      <label>
        <span>Admin password</span>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Signing in..." : "Sign in"}
      </button>

      {status === "error" ? (
        <p className="adminLoginError">Incorrect password. Please try again.</p>
      ) : null}
    </form>
  );
}
