import { articleRoute } from "@/components/ArticleView";
import { usefulArticles } from "@/lib/useful";

const route = articleRoute("useful", usefulArticles, {
  uz: { kicker: "Foydali", back: "Barcha qo‘llanmalar" },
  ru: { kicker: "Полезное", back: "Все материалы" },
  en: { kicker: "Useful", back: "All guides" },
});

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
