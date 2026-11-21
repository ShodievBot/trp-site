import type { UsefulArticle } from "@/lib/useful";
import { article as newRules } from "./phd-dsc-new-rules-2027";
import { article as uzakademiya } from "./uzakademiya-journal-database";
import { article as journalSelection } from "./journal-selection-guide";
import { article as thesisVsArticle } from "./thesis-vs-article";
import { article as oakSite } from "./oak-site-documents";
import { article as scopusNima } from "./scopus-nima";
import { article as checkScopus } from "./check-journal-scopus";
import { article as scopusWos } from "./scopus-vs-web-of-science";
import { article as writeArticle } from "./ilmiy-maqola-yozish";
import { article as oakList } from "./oak-journals-list";
import { article as fee } from "./publication-fee";
import { article as predatory } from "./predatory-journals";
import { article as quartiles } from "./quartiles-citescore-sjr";
import { article as imrad } from "./imrad-structure";
import { article as abstract } from "./abstract-keywords";
import { article as references } from "./references-apa-gost";
import { article as plagiarism } from "./plagiarism-originality";
import { article as profiles } from "./orcid-scopus-id-scholar";
import { article as hIndex } from "./h-index";
import { article as doi } from "./doi";
import { article as monograph } from "./monograph-isbn";
import { article as oak } from "./oak-requirements-phd-dsc";
import { article as conference } from "./international-conference";
import { article as dgu } from "./dgu-patent";
import { article as timeline } from "./publication-timeline";

// Order here is the order on the «Полезное» page.
// New articles ship in four languages: uz/ru/en/tr (kk falls back to ru).
export const articles: UsefulArticle[] = [
  newRules, journalSelection, uzakademiya, oakSite, thesisVsArticle,
  scopusNima, checkScopus, scopusWos, writeArticle, oakList, fee,
  predatory, quartiles, imrad, abstract, references, plagiarism, profiles,
  hIndex, doi, monograph, oak, conference, dgu, timeline,
];
