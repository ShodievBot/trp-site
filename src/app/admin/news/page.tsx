import Link from "next/link";
import type { CSSProperties } from "react";
import { requireAdmin } from "@/lib/requireAdmin";
import { getAdminNews } from "@/lib/newsAdmin";

export const dynamic = "force-dynamic";

const pageIntroStyle: CSSProperties = {
  maxWidth: "920px",
};

const newsListStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "18px",
  marginTop: "26px",
};

const newsCardStyle: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "24px",
  alignItems: "center",
  padding: "22px",
  borderRadius: "24px",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.09)",
  boxShadow: "0 18px 42px rgba(15, 23, 42, 0.07)",
};

const newsContentStyle: CSSProperties = {
  minWidth: 0,
};

const statusBaseStyle: CSSProperties = {
  display: "inline-flex",
  width: "fit-content",
  minHeight: "26px",
  padding: "0 11px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  fontSize: "10px",
  fontWeight: 950,
  textTransform: "uppercase",
  letterSpacing: "0.13em",
};

const publishedStyle: CSSProperties = {
  ...statusBaseStyle,
  background: "#dcfce7",
  color: "#166534",
  border: "1px solid rgba(22, 101, 52, 0.12)",
};

const draftStyle: CSSProperties = {
  ...statusBaseStyle,
  background: "#fef3c7",
  color: "#92400e",
  border: "1px solid rgba(146, 64, 14, 0.12)",
};

const titleStyle: CSSProperties = {
  margin: "12px 0 9px",
  color: "#111827",
  fontSize: "23px",
  lineHeight: 1.16,
  letterSpacing: "-0.04em",
  fontWeight: 900,
};

const metaStyle: CSSProperties = {
  margin: 0,
  color: "#667085",
  fontSize: "13px",
  lineHeight: 1.55,
  fontWeight: 650,
};

const slugStyle: CSSProperties = {
  color: "#98a2b3",
};

const actionsStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "12px",
  flexWrap: "nowrap",
};

const buttonBaseStyle: CSSProperties = {
  minWidth: "86px",
  minHeight: "42px",
  padding: "0 18px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  textDecoration: "none",
  fontSize: "13px",
  lineHeight: 1,
  fontWeight: 950,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
};

const editButtonStyle: CSSProperties = {
  ...buttonBaseStyle,
  background: "linear-gradient(135deg, #f6dda0 0%, #d8ad58 100%)",
  color: "#111827",
  border: "1px solid rgba(216, 173, 88, 0.55)",
  boxShadow: "0 12px 24px rgba(214, 168, 79, 0.24)",
};

const viewButtonStyle: CSSProperties = {
  ...buttonBaseStyle,
  background: "#ffffff",
  color: "#344054",
  border: "1px solid rgba(15, 23, 42, 0.14)",
  boxShadow: "0 10px 22px rgba(15, 23, 42, 0.045)",
};

const emptyStyle: CSSProperties = {
  padding: "24px",
  borderRadius: "22px",
  background: "#ffffff",
  border: "1px solid rgba(15, 23, 42, 0.09)",
  color: "#667085",
  fontWeight: 750,
  boxShadow: "0 14px 34px rgba(15, 23, 42, 0.045)",
};

export default async function AdminNewsPage() {
  await requireAdmin();

  const news = await getAdminNews();

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">Admin panel</p>
            <h1>News management</h1>
          </div>
        </div>

        <div className="adminHeaderActions">
          <Link className="adminBackLink" href="/admin/news/new">
            + Add news
          </Link>
          <Link className="adminBackLink ghost" href="/admin">
            Dashboard
          </Link>
        </div>
      </header>

      <section className="adminPanelCard">
        <div style={pageIntroStyle}>
          <p className="adminEyebrow">CMS</p>
          <h2>News list</h2>
          <p>
            Manage multilingual news. Each item below is shown as a separate card
            with clear actions.
          </p>
        </div>

        <div style={newsListStyle}>
          {news.length === 0 ? (
            <div style={emptyStyle}>No news yet.</div>
          ) : (
            news.map((item) => {
              const title = item.title.ru || item.title.en || item.title.uz || "Untitled news";

              return (
                <article style={newsCardStyle} key={item.id}>
                  <div style={newsContentStyle}>
                    <span style={item.status === "draft" ? draftStyle : publishedStyle}>
                      {item.status}
                    </span>

                    <h3 style={titleStyle}>{title}</h3>

                    <p style={metaStyle}>
                      <strong>{item.category}</strong>
                      {" · "}
                      {item.publishedAt}
                      {" · "}
                      <span style={slugStyle}>/news/{item.slug}</span>
                    </p>
                  </div>

                  <div style={actionsStyle}>
                    <Link
                      href={`/admin/news/${item.id}/edit`}
                      style={editButtonStyle}
                    >
                      Edit
                    </Link>

                    <Link
                      href={`/ru/news/${item.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={viewButtonStyle}
                    >
                      View
                    </Link>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}
