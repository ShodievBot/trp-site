import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";

export default async function AdminApplicationsPage() {
  await requireAdmin();

  return (
    <main className="adminPage">
      <AdminSimpleHeader title="Applications" />
      <section className="adminPanelCard">
        <p className="adminEyebrow">Telegram connected</p>
        <h2>Website applications</h2>
        <p>
          Website forms are currently sent directly to Telegram. Later, we can also save
          applications to Supabase and display them here.
        </p>
      </section>
    </main>
  );
}

function AdminSimpleHeader({ title }: { title: string }) {
  return (
    <header className="adminTopbar">
      <div>
        <div className="adminLogo">TRP</div>
        <div>
          <p className="adminEyebrow">Admin panel</p>
          <h1>{title}</h1>
        </div>
      </div>
      <Link className="adminBackLink" href="/admin">← Dashboard</Link>
    </header>
  );
}
