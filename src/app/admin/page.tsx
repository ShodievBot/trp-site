import Link from "next/link";
import { requireAdmin } from "@/lib/requireAdmin";
import AdminLogoutButton from "@/components/AdminLogoutButton";

const cards = [
  {
    title: "News",
    text: "Create, edit and publish multilingual news.",
    href: "/admin/news",
    badge: "CMS",
  },
  {
    title: "Payment",
    text: "Manage QR code, payment text and YouTube video.",
    href: "/admin/payment",
    badge: "Settings",
  },
  {
    title: "Documents",
    text: "Contracts and official documents with files.",
    href: "/admin/documents",
    badge: "CMS",
  },
  {
    title: "License & offer",
    text: "Publishing license image and public offer text / PDF.",
    href: "/admin/legal",
    badge: "Legal",
  },
  {
    title: "Applications",
    text: "Website requests and Telegram submissions.",
    href: "/admin/applications",
    badge: "Requests",
  },
];

export default async function AdminPage() {
  await requireAdmin();

  return (
    <main className="adminPage">
      <header className="adminTopbar">
        <div>
          <div className="adminLogo">TRP</div>
          <div>
            <p className="adminEyebrow">The Most Reliable Publication</p>
            <h1>Admin dashboard</h1>
          </div>
        </div>

        <Link className="adminBackLink ghost" href="/admin/settings">Settings</Link>
          <AdminLogoutButton />
      </header>

      <section className="adminWelcome">
        <p className="adminEyebrow">Control center</p>
        <h2>Website management panel</h2>
        <p>
          This is the administration area for managing multilingual website content,
          news, payment information, applications and future official documents.
        </p>
      </section>

      <section className="adminGrid">
        {cards.map((card) => (
          <Link className="adminCard" href={card.href} key={card.title}>
            <span>{card.badge}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <strong>Open →</strong>
          </Link>
        ))}
      </section>
    </main>
  );
}
