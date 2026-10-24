import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import { getLegalSettings } from "@/lib/legalAdmin";
import AdminLegalForm from "@/components/AdminLegalForm";

export const dynamic = "force-dynamic";

export default async function AdminLegalPage() {
  await requireAdmin();

  const settings = await getLegalSettings();

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Admin panel</p>
            <h1>License & public offer</h1>
          </div>
        </div>

        <div className="adminHeaderActions">
          <Link className="adminBackLink ghost" href="/admin">
            Dashboard
          </Link>
          <Link className="adminBackLink ghost" href="/ru/license" target="_blank">
            View license
          </Link>
          <Link className="adminBackLink" href="/ru/offer" target="_blank">
            View offer
          </Link>
        </div>
      </header>

      <section className="adminPanelCard">
        <AdminLegalForm settings={settings} />
      </section>
    </main>
  );
}
