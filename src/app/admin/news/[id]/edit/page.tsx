import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/requireAdmin";
import { getAdminNewsById } from "@/lib/newsAdmin";
import AdminNewsForm from "@/components/AdminNewsForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function AdminEditNewsPage({ params }: Props) {
  await requireAdmin();

  const { id } = await params;
  const item = await getAdminNewsById(id);

  if (!item) {
    notFound();
  }

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Admin panel</p>
            <h1>Edit news</h1>
          </div>
        </div>

        <Link className="adminBackLink" href="/admin/news">
          ← News list
        </Link>
      </header>

      <section className="adminPanelCard">
        <p className="adminEyebrow">Edit item</p>
        <h2>{item.title.en || item.title.ru || item.title.uz}</h2>
        <p>
          Update multilingual content, status, category, publication date and slug.
        </p>

        <AdminNewsForm mode="edit" item={item} />
      </section>
    </main>
  );
}
