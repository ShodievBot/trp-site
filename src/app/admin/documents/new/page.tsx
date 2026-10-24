import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import AdminDocumentForm from "@/components/AdminDocumentForm";

export const dynamic = "force-dynamic";

export default async function NewDocumentPage() {
  await requireAdmin();

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Documents CMS</p>
            <h1>Add document</h1>
          </div>
        </div>

        <div className="adminHeaderActions">
          <Link className="adminBackLink ghost" href="/admin/documents">
            Back to documents
          </Link>
        </div>
      </header>

      <section className="adminPanelCard">
        <p className="adminEyebrow">New document</p>
        <h2>Create document</h2>
        <p>
          Add document information in three languages. File upload will be added later;
          for now use a PDF path or external link.
        </p>

        <AdminDocumentForm />
      </section>
    </main>
  );
}
