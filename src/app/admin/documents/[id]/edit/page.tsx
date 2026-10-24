import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/requireAdmin";
import { getDocumentById } from "@/lib/documentsAdmin";
import AdminDocumentForm from "@/components/AdminDocumentForm";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditDocumentPage({ params }: Props) {
  await requireAdmin();

  const { id } = await params;
  const item = await getDocumentById(id);

  if (!item) {
    notFound();
  }

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Documents CMS</p>
            <h1>Edit document</h1>
          </div>
        </div>

        <div className="adminHeaderActions">
          <Link className="adminBackLink ghost" href="/admin/documents">
            Back to documents
          </Link>
        </div>
      </header>

      <section className="adminPanelCard">
        <p className="adminEyebrow">Edit document</p>
        <h2>{item.title.ru || item.title.en || item.title.uz}</h2>
        <p>
          Update document content, publication status and file link.
        </p>

        <AdminDocumentForm mode="edit" item={item} />
      </section>
    </main>
  );
}
