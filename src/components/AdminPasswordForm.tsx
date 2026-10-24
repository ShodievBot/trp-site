"use client";

import { useState, type FormEvent } from "react";

export default function AdminPasswordForm() {
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("saving");
    setError("");

    const form = new FormData(event.currentTarget);

    const payload = {
      currentPassword: form.get("currentPassword"),
      newPassword: form.get("newPassword"),
      confirmPassword: form.get("confirmPassword"),
    };

    const response = await fetch("/api/admin/settings/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      setStatus("error");
      setError(data.error || "Failed to change password.");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
  }

  return (
    <form className="adminSettingsForm" onSubmit={handleSubmit}>
      <label>
        <span>Current password</span>
        <input type="password" name="currentPassword" required />
      </label>

      <label>
        <span>New password</span>
        <input type="password" name="newPassword" minLength={8} required />
      </label>

      <label>
        <span>Confirm new password</span>
        <input type="password" name="confirmPassword" minLength={8} required />
      </label>

      <div className="adminSettingsActions">
        <button type="submit" disabled={status === "saving"}>
          {status === "saving" ? "Saving..." : "Change password"}
        </button>

        {status === "success" ? (
          <p className="adminSettingsSuccess">Password changed successfully.</p>
        ) : null}

        {status === "error" ? (
          <p className="adminSettingsError">{error}</p>
        ) : null}
      </div>
    </form>
  );
}
