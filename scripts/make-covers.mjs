// Branded 1200x630 covers for «Полезное» articles and the default news cover.
// Run: node scripts/make-covers.mjs  (add a [slug, label, caption] row for each new article)
import sharp from "sharp";

const covers = [
  ["news", "TRP", "The Most Reliable Publication"],
  ["predatory-journals", "⚠ Journals", "Predatory journals"],
  ["quartiles-citescore-sjr", "Q1–Q4", "CiteScore · SJR"],
  ["imrad-structure", "IMRAD", "Introduction · Methods · Results · Discussion"],
  ["abstract-keywords", "Abstract", "Keywords"],
  ["references-apa-gost", "APA · GOST", "References"],
  ["plagiarism-originality", "100%", "Originality · Anti-plagiarism"],
  ["orcid-scopus-id-scholar", "ORCID", "Scopus Author ID · Google Scholar"],
  ["h-index", "h-index", "Hirsch index"],
  ["doi", "DOI", "Digital Object Identifier"],
  ["monograph-isbn", "ISBN", "Monograph · Textbook"],
  ["oak-requirements-phd-dsc", "PhD · DSc", "OAK requirements"],
  ["international-conference", "Conference", "Abstract · Talk · Certificate"],
  ["dgu-patent", "DGU · Patent", "Software · Invention"],
  ["publication-timeline", "Timeline", "Submission → Publication"],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const [slug, label, caption] of covers) {
  const size = label.length > 9 ? 120 : 170;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#140f2e"/><stop offset="1" stop-color="#3a0f8f"/></linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.2" r="0.5"><stop offset="0" stop-color="#d6a84f" stop-opacity="0.45"/><stop offset="1" stop-color="#d6a84f" stop-opacity="0"/></radialGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6dda0"/><stop offset="1" stop-color="#d8ad58"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g stroke="#ffffff" stroke-opacity="0.06">${Array.from({ length: 11 }, (_, i) => `<path d="M${(i + 1) * 100} 0V630"/>`).join("")}${Array.from({ length: 6 }, (_, i) => `<path d="M0 ${(i + 1) * 100}H1200"/>`).join("")}</g>
  <rect x="80" y="72" width="96" height="56" rx="14" fill="none" stroke="url(#gold)" stroke-width="2"/>
  <text x="128" y="110" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#f6dda0" letter-spacing="3">TRP</text>
  <text x="80" y="370" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="${size}" fill="#ffffff">${esc(label)}</text>
  <rect x="80" y="420" width="120" height="6" rx="3" fill="url(#gold)"/>
  <text x="80" y="490" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#e7def7">${esc(caption)}</text>
  <text x="80" y="570" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#b9a9dd">trp-nashriyoti.uz</text>
</svg>`;
  const dir = slug === "news" ? "covers" : "useful";
  await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile(`public/images/${dir}/${slug}.webp`);
}
console.log(covers.length, "covers written");
