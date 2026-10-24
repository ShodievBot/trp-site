import Link from "next/link";
import type { CSSProperties } from "react";
import { requireAdmin } from "@/lib/requireAdmin";
import { getAdminDocuments } from "@/lib/documentsAdmin";

export const dynamic = "force-dynamic";

const listStyle: CSSProperties = {
  display: "grid",
  gap: "18px",
  marginTop: "26px",
};

const cardStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "22px",
  alignItems: "center",
  padding: "22px",
  borderRadius: "24px",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.09)",
  boxShadow: "0 18px 42px rgba(15, 23, 42, 0.065)",
};

const badgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  minHeight: "26px",
  padding: "0 11px",
  borderRadius: "999px",
  background: "#dcfce7",
  color: "#166534",
  fontSize: "10px",
  fontWeight: 950,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
};

const draftBadgeStyle: CSSProperties = {
  ...badgeStyle,
  background: "#fef3c7",
  color: "#92400e",
};

const titleStyle: CSSProperties = {
  margin: "12px 0 8px",
  color: "#111827",
  fontSize: "23px",
  lineHeight: 1.14,
  letterSpacing: "-0.04em",
};

const metaStyle: CSSProperties = {
  margin: 0,
  color: "#667085",
  fontSize: "13px",
  lineHeight: 1.55,
};

const actionsStyle: CSSProperties = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  justifyContent: "flex-end",
};

const editButtonStyle: CSSProperties = {
  minWidth: "86px",
  minHeight: "42px",
  padding: "0 18px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  background: "linear-gradient(135deg, #f6dda0, #d8ad58)",
  color: "#111827",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: 950,
  boxShadow: "0 12px 24px rgba(214, 168, 79, 0.22)",
};

const viewButtonStyle: CSSProperties = {
  ...editButtonStyle,
  background: "#ffffff",
  color: "#344054",
  border: "1px solid rgba(15, 23, 42, 0.12)",
  boxShadow: "0 10px 22px rgba(15, 23, 42, 0.045)",
};

const emptyStyle: CSSProperties = {
  padding: "24px",
  borderRadius: "22px",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.09)",
  color: "#667085",
  fontWeight: 750,
};

export default async function AdminDocumentsPage() {
  await requireAdmin();

  const documents = await getAdminDocuments();

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Admin panel</p>
            <h1>Documents</h1>
          </div>
        </div>

        <div className="adminHeaderActions">
          <Link className="adminBackLink" href="/admin/documents/new">
            + Add document
          </Link>
          <Link className="adminBackLink ghost" href="/admin">
            Dashboard
          </Link>
        </div>
      </header>

      <section className="adminPanelCard">
        <p className="adminEyebrow">Documents CMS</p>
        <h2>Document management</h2>
        <p>
          Add and manage official documents. Documents can be published now or kept
          as drafts until launch.
        </p>

        <div style={listStyle}>
          {documents.length === 0 ? (
            <div style={emptyStyle}>
              No documents yet. Click “+ Add document” to create the first one.
            </div>
          ) : (
            documents.map((item) => (
              <article style={cardStyle} key={item.id}>
                <div>
                  <span style={item.status === "draft" ? draftBadgeStyle : badgeStyle}>
                    {item.status}
                  </span>

                  <h3 style={titleStyle}>
                    {item.title.ru || item.title.en || item.title.uz || "Untitled document"}
                  </h3>

                  <p style={metaStyle}>
                    <strong>{item.category}</strong>
                    {" · "}
                    {item.publishedAt}
                    {" · "}
                    /documents/{item.slug}
                  </p>
                </div>

                <div style={actionsStyle}>
                  <Link href={`/admin/documents/${item.id}/edit`} style={editButtonStyle}>
                    Edit
                  </Link>

                  <Link href={`/ru/documents/${item.slug}`} target="_blank" style={viewButtonStyle}>
                    View
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
