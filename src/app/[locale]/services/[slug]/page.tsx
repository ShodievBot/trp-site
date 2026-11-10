import { articleRoute } from "@/components/ArticleView";
import { services } from "@/content/services";

const route = articleRoute("services", services, {
  uz: { kicker: "Xizmatlar", back: "Barcha xizmatlar" },
  ru: { kicker: "Услуги", back: "Все услуги" },
  en: { kicker: "Services", back: "All services" },
});

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
