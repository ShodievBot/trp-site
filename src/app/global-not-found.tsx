import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { plexSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "404 | The Most Reliable Publication",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="uz" className={plexSans.variable}>
      <body>
        <main className="innerHero">
          <div className="innerHeroContent">
            <p className="innerKicker">404</p>
            <h1>Sahifa topilmadi · Страница не найдена · Page not found</h1>
            <p>
              <Link href="/uz">O‘zbekcha</Link> · <Link href="/ru">Русский</Link> ·{" "}
              <Link href="/en">English</Link>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
