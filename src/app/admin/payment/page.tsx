import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import { getPaymentSettings } from "@/lib/paymentAdmin";
import AdminPaymentForm from "@/components/AdminPaymentForm";

export const dynamic = "force-dynamic";

export default async function AdminPaymentPage() {
  await requireAdmin();

  const settings = await getPaymentSettings();

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Admin panel</p>
            <h1>Payment settings</h1>
          </div>
        </div>

        <div className="adminHeaderActions">
          <Link className="adminBackLink ghost" href="/admin">
            Dashboard
          </Link>
          <Link className="adminBackLink" href="/ru/payment" target="_blank">
            View page
          </Link>
        </div>
      </header>

      <section className="adminPanelCard">
        <p className="adminEyebrow">Payment CMS</p>
        <h2>Manage payment page</h2>
        <p>
          Edit payment page content, Telegram link, QR placeholder and YouTube video
          link from one place.
        </p>

        <AdminPaymentForm settings={settings} />
      </section>
    </main>
  );
}
