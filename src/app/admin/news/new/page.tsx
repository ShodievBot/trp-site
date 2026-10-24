import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import AdminNewsForm from "@/components/AdminNewsForm";

export default async function AdminNewNewsPage() {
  await requireAdmin();

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Admin panel</p>
            <h1>Add news</h1>
          </div>
        </div>

        <Link className="adminBackLink" href="/admin/news">
          ← News list
        </Link>
      </header>

      <section className="adminPanelCard">
        <p className="adminEyebrow">New item</p>
        <h2>Create multilingual news</h2>
        <p>
          Fill in titles for all languages. Excerpts and content can be updated later.
        </p>

        <AdminNewsForm />
      </section>
    </main>
  );
}
