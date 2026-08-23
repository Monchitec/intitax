"use client";

import * as React from "react";
import { ShieldCheck, CheckCircle2, XCircle, Clock } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { whyUsStyles } from "./WhyUsSection.styles";

export function WhyUsSection() {
  const { t } = useLanguage();
  const w = t.whyUs;

  return (
    <section className={whyUsStyles.section}>
      <div className={whyUsStyles.container}>
        {/* Section Header (Clean codewithbhurtel style) */}
        <div className={whyUsStyles.headerWrapper}>
          <h2 className={whyUsStyles.title}>{w.title}</h2>
          <div className={whyUsStyles.accentLine} />
          <p className={whyUsStyles.subtitle}>{w.subtitle}</p>
        </div>

        {/* Comparison Dual Cards */}
        <div className={whyUsStyles.grid}>
          {/* Intitax Column */}
          <div className={whyUsStyles.intitaxCard}>
            <div className={whyUsStyles.intitaxBadge}>{w.recommendedBadge}</div>

            <h3 className={whyUsStyles.cardTitleIntitax}>
              <ShieldCheck className={whyUsStyles.titleIconIntitax} />
              <span>{w.intitaxTitle}</span>
            </h3>

            <div className={whyUsStyles.itemList}>
              {w.points.map((pt, idx) => (
                <div key={idx} className={whyUsStyles.itemBox}>
                  <span className={whyUsStyles.itemHeader}>{pt.feature}</span>
                  <p className={whyUsStyles.itemDescIntitax}>
                    <CheckCircle2 className={whyUsStyles.iconCheck} />
                    <span>{pt.intitax}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Method Column */}
          <div className={whyUsStyles.traditionalCard}>
            <h3 className={whyUsStyles.cardTitleTraditional}>
              <Clock className={whyUsStyles.titleIconTraditional} />
              <span>{w.traditionalTitle}</span>
            </h3>

            <div className={whyUsStyles.itemList}>
              {w.points.map((pt, idx) => (
                <div key={idx} className={whyUsStyles.itemBox}>
                  <span className={whyUsStyles.itemHeader}>{pt.feature}</span>
                  <p className={whyUsStyles.itemDescTraditional}>
                    <XCircle className={whyUsStyles.iconCross} />
                    <span>{pt.traditional}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
