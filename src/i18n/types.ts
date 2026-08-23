export type Language = "es" | "en";

export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  note?: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TaxFormTickerItem {
  code: string;
  name: string;
  description: string;
}

export interface Dictionary {
  navbar: {
    home: string;
    services: string;
    faq: string;
    contact: string;
    cta: string;
    callSupport: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
  };
  hero: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    windowTitle: string;
    typewriterPhrases: string[];
    formsTicker: TaxFormTickerItem[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  whyUs: {
    badge: string;
    recommendedBadge: string;
    title: string;
    subtitle: string;
    intitaxTitle: string;
    traditionalTitle: string;
    points: {
      feature: string;
      intitax: string;
      traditional: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    buttonPrimary: string;
    buttonSecondary: string;
    phoneText: string;
  };
  footer: {
    description: string;
    rights: string;
    disclaimer: string;
    sections: {
      servicesTitle: string;
      linksTitle: string;
      contactTitle: string;
    };
  };
  common: {
    toggleTheme: string;
    lightMode: string;
    darkMode: string;
  };
}
