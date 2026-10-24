import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import AdminPasswordForm from "@/components/AdminPasswordForm";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  await requireAdmin();

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Admin panel</p>
            <h1>Settings</h1>
          </div>
        </div>

        <div className="adminHeaderActions">
          <Link className="adminBackLink ghost" href="/admin">
            Dashboard
          </Link>
        </div>
      </header>

      <section className="adminPanelCard">
        <p className="adminEyebrow">Security</p>
        <h2>Change admin password</h2>
        <p>
          Update the admin password without editing code or environment variables.
          The new password will be stored securely in Supabase.
        </p>

        <AdminPasswordForm />
      </section>
    </main>
  );
}
