import type { UsefulArticle } from "@/lib/useful";
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
export const articles: UsefulArticle[] = [
  predatory, quartiles, imrad, abstract, references, plagiarism, profiles,
  hIndex, doi, monograph, oak, conference, dgu, timeline,
];
