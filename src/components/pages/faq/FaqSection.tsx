"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { faqStyles } from "./FaqSection.styles";

export function FaqSection() {
  const { t } = useLanguage();
  const f = t.faq;
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className={faqStyles.section}>
      <div className={faqStyles.container}>
        {/* Section Header */}
        <div className={faqStyles.headerWrapper}>
          <div className={faqStyles.badge}>
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{f.badge}</span>
          </div>
          <h2 className={faqStyles.title}>{f.title}</h2>
          <p className={faqStyles.subtitle}>{f.subtitle}</p>
        </div>

        {/* Accordion Items */}
        <div className={faqStyles.accordionList}>
          {f.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className={faqStyles.accordionItem}>
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className={faqStyles.triggerButton}
                  aria-expanded={isOpen}
                >
                  <span className={faqStyles.questionText}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`${faqStyles.chevronIcon} ${isOpen ? faqStyles.chevronIconOpen : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className={faqStyles.contentPanel}>{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
