import { articleRoute } from "@/components/ArticleView";
import { licenses } from "@/content/licenses";

const route = articleRoute("license", licenses, {
  uz: { kicker: "Hujjatlar", back: "Barcha hujjatlar" },
  ru: { kicker: "Документы", back: "Все документы" },
  en: { kicker: "Documents", back: "All documents" },
});

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
