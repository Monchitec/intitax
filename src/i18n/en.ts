import { Dictionary } from "./types";

export const en: Dictionary = {
  navbar: {
    home: "Home",
    services: "Services",
    faq: "FAQ",
    contact: "Contact",
    cta: "Book Free Consultation",
    callSupport: "Call support",
    openMenu: "Open navigation menu",
    closeMenu: "Close menu",
    switchLanguage: "Switch language",
  },
  hero: {
    titleStart: "Your Taxes, ",
    titleHighlight: "In Good Hands.",
    subtitle:
      "We guide you through your federal and state tax returns clearly and securely. Whether you work as an employee or on your own, we protect your money and help you obtain the maximum legal refund possible.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "Explore Services",
    windowTitle: "intitax • Tax Advisory",
    typewriterPhrases: [
      "Preparing your Form 1040 tax return with thorough review...",
      "Maximizing your Schedule C and 1099 deductions...",
      "Filing your ITIN application quickly and securely...",
      "Responding to your IRS notice or audit letter...",
      "Recovering refunds with prior-year tax amendments...",
    ],
    formsTicker: [
      {
        code: "1040",
        name: "Individual Income Tax Return",
        description:
          "Dependent tax credits, standard deductions, and legal maximum refund.",
      },
      {
        code: "1040-X",
        name: "Amended U.S. Individual Tax",
        description:
          "Recover missed tax refunds or correct errors from previous tax filings.",
      },
      {
        code: "W-2",
        name: "Wage & Tax Statement",
        description:
          "Federal withholdings and payroll tax optimization for employees.",
      },
      {
        code: "Sch C",
        name: "Profit or Loss from Business",
        description:
          "Sole proprietorship net revenue, operating deductions, and self-employment tax.",
      },
      {
        code: "1099-NEC",
        name: "Nonemployee Compensation",
        description:
          "For independent contractors, freelancers, and professional service fees.",
      },
      {
        code: "1099-K",
        name: "Payment Card & Network Transactions",
        description:
          "Uber, Lyft, DoorDash, Stripe, PayPal, and online store payment reports.",
      },
      {
        code: "1099-INT",
        name: "Interest Income Tax Statement",
        description:
          "Tax reporting on savings accounts, certificates of deposit, and bond earnings.",
      },
      {
        code: "W-7",
        name: "ITIN Application & Renewal",
        description:
          "Secure ITIN filing with IRS-approved certified document handling.",
      },
      {
        code: "1098-T",
        name: "Tuition & Education Tax Credits",
        description:
          "Claim higher education tax credits (AOTC / LLC) for students and families.",
      },
    ],
  },
  services: {
    badge: "Our Specialties",
    title: "Clear and precise solutions for your taxes",
    subtitle:
      "Direct, personalized support to resolve any IRS requirement quickly, securely, and stress-free.",
    items: [
      {
        id: "personal-tax",
        title: "Personal Tax Returns (Form 1040)",
        note: "Coming soon: Corporate Taxes",
        description:
          "Thorough preparation and filing of your individual annual tax return (Form 1040), ensuring full application of every legal tax credit and deduction you qualify for.",
        features: [
          "Individual and joint returns (Form 1040)",
          "Child, education, and dependent tax credits",
          "Optimized standard and itemized deductions",
          "Fast electronic filing (E-file)",
        ],
      },
      {
        id: "tax-amended",
        title: "Tax Amendments (Form 1040-X)",
        badge: "Prior Year Corrections",
        description:
          "Did you make a mistake or forget to claim deductions in prior years? We fix and amend your past returns to recover unclaimed refunds or get your status compliant.",
        features: [
          "Form 1040-X for past adjustments",
          "Claim overdue, unclaimed refunds",
          "Filing status or omitted income corrections",
          "Full support through IRS approval",
        ],
      },
      {
        id: "irs-letters",
        title: "IRS Notice & Letter Assistance",
        badge: "Audit & Notice Support",
        description:
          "Receiving an IRS letter can be stressful. We analyze every notice, explain exactly what it means, and draft the proper technical response to resolve it without penalties.",
        features: [
          "Thorough review of IRS letters and notices",
          "Drafting and submitting official responses",
          "Penalty abatement and discrepancy resolution",
          "Step-by-step defense and case tracking",
        ],
      },
      {
        id: "itin-application",
        title: "ITIN Application & Renewal (Form W-7)",
        badge: "Secure Processing",
        description:
          "We manage your Individual Taxpayer Identification Number (ITIN) application or renewal, guiding you through documentation requirements with zero risk of rejection.",
        features: [
          "First-time ITIN applications and renewals",
          "Official Form W-7 preparation",
          "Identity document review and verification",
          "Tracking until official IRS number issuance",
        ],
      },
      {
        id: "schedule-c",
        title: "Schedule C Assistance (Self-Employment & 1099)",
        badge: "Freelancers & Contractors",
        description:
          "For independent contractors, freelancers, gig workers, and self-employed individuals. We organize your income and deduct all legitimate business expenses to lower your taxes legally.",
        features: [
          "Schedule C preparation (Profit or Loss from Business)",
          "Mileage, equipment, and home office deductions",
          "Self-Employment Tax calculation and optimization",
          "Strategic deduction planning for the upcoming year",
        ],
      },
    ],
  },
  whyUs: {
    badge: "Why Choose Intitax?",
    recommendedBadge: "Recommended Choice",
    title: "The power of having true experts on your side",
    subtitle:
      "Compare the Intitax experience against traditional, slow, and confusing accounting methods.",
    intitaxTitle: "With Intitax",
    traditionalTitle: "Traditional Method",
    points: [
      {
        feature: "Attention & Support",
        intitax:
          "Dedicated 1-on-1 advisor, direct appointments, and fast support when you need it.",
        traditional:
          "Slow in-person appointments and long delays when you have questions.",
      },
      {
        feature: "Deduction Optimization",
        intitax:
          "Deep analysis of every legal benefit to maximize your refund and savings.",
        traditional:
          "Generic, automated entry without examining your specific tax deductions.",
      },
      {
        feature: "Transparent Pricing",
        intitax:
          "Clear, upfront quote with zero hidden fees before starting work.",
        traditional:
          "Surprise invoices and unexpected charges at the time of signing.",
      },
      {
        feature: "Security & Privacy",
        intitax:
          "Modern digital platform with 100% confidential and safe document handling.",
        traditional:
          "Exchanging physical paper documents or unencrypted methods.",
      },
    ],
  },
  faq: {
    badge: "Frequently Asked Questions",
    title: "Clear answers to your tax questions",
    subtitle:
      "Transparent guidance so you can make informed decisions with your taxes.",
    items: [
      {
        question: "How does the initial free consultation work?",
        answer:
          "During the initial call, we review your current tax scenario (income docs, expenses, pending IRS letters, or ITIN status). We explain your options and provide a clear quote before starting any work.",
      },
      {
        question: "What documents do I need to file Form 1040?",
        answer:
          "Typically you need your government ID, SSN or ITIN, income records (1099s, bank summaries if self-employed), and proof of deductible expenses or dependents.",
      },
      {
        question: "Can I apply for an ITIN without regular immigration status?",
        answer:
          "Yes. The IRS issues ITIN numbers strictly for tax filing purposes, regardless of immigration status. We assist in preparing Form W-7 and verifying required identity documents.",
      },
      {
        question: "What should I do if I received an IRS letter or notice?",
        answer:
          "The most important thing is not to ignore it and act within the deadline. Send us a copy immediately: we will examine it in detail, identify what the IRS is requesting, and draft the proper response.",
      },
      {
        question:
          "What are the benefits of filing Schedule C if I am self-employed?",
        answer:
          "Schedule C allows you to deduct all ordinary and necessary expenses for your trade (mileage, tools, phone, marketing, supplies), significantly reducing taxable income and paying only what is fair by law.",
      },
    ],
  },
  cta: {
    badge: "Immediate Support",
    title: "Ready to put your taxes in good hands?",
    subtitle:
      "Book your free consultation today and let us maximize your deductions with complete peace of mind and certified backing.",
    buttonPrimary: "Book Free Consultation",
    buttonSecondary: "Explore Services",
    phoneText: "Or call us directly at:",
  },
  footer: {
    description:
      "Intitax is your trusted partner for personal tax preparation, ITIN applications, and IRS letter assistance in the United States.",
    rights: "All rights reserved.",
    disclaimer:
      "Disclaimer: The information provided on this website is for informational and professional guidance purposes. Intitax provides tax preparation services in accordance with IRS regulations.",
    sections: {
      servicesTitle: "Services",
      linksTitle: "Navigation",
      contactTitle: "Contact & Support",
    },
  },
  common: {
    toggleTheme: "Toggle light and dark mode",
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode",
  },
};
