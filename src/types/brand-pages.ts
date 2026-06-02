import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export type AffiliateStat = {
  label: string;
  value: string;
};

export type AffiliateStep = {
  description: string;
  title: string;
};

export type PolicySection = {
  body?: string;
  items?: Array<{
    label?: string;
    text: string;
  }>;
  title: string;
};

export type ResponsibleSafetyCard = {
  description: string;
  icon: ComponentType<LucideProps>;
  title: string;
};

export type TermsSection = {
  body?: string;
  items?: string[];
  note?: {
    body: string;
    title: string;
  };
  title: string;
};


export type SupportFaq = {
  answer:string;
  question:string
}

export type SupportQuickLink = {
  label:string;
  to:string
}