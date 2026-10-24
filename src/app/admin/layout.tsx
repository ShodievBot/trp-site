import "../globals.css";
import { plexSans } from "@/lib/fonts";

export const metadata = {
  title: "Admin Panel | The Most Reliable Publication",
  description: "Website administration panel",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={plexSans.variable}>
      <body>
        <div className="adminBody">{children}</div>
      </body>
    </html>
  );
}
