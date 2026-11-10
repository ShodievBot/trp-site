import { articleRoute } from "@/components/ArticleView";
import { conferences } from "@/content/conferences";

const route = articleRoute("conferences", conferences, {
  uz: { kicker: "Konferensiyalar", back: "Barcha konferensiyalar" },
  ru: { kicker: "Конференции", back: "Все конференции" },
  en: { kicker: "Conferences", back: "All conferences" },
});

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
