"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { servicesStyles } from "./ServicesSection.styles";

export function ServicesSection() {
  const { t } = useLanguage();
  const s = t.services;

  const item1040 = s.items.find((i) => i.id === "personal-tax") || s.items[0];
  const itemScheduleC =
    s.items.find((i) => i.id === "schedule-c") || s.items[4];
  const itemItin =
    s.items.find((i) => i.id === "itin-application") || s.items[3];
  const itemIrs = s.items.find((i) => i.id === "irs-letters") || s.items[2];
  const itemAmended =
    s.items.find((i) => i.id === "tax-amended") || s.items[1];

  return (
    <section id="servicios" className={servicesStyles.section}>
      <div className={servicesStyles.container}>
        <div className={servicesStyles.headerWrapper}>
          <h2 className={servicesStyles.title}>{s.title}</h2>
          <p className={servicesStyles.subtitle}>{s.subtitle}</p>
        </div>

        <div className={servicesStyles.grid}>
          {/* CARD 1: FORM 1040 (Ámbar Inti Suave) */}
          <Link
            href="/agendar"
            className={`${servicesStyles.cardBase} ${servicesStyles.cardAmber}`}
          >
            <div>
              <div className={servicesStyles.cardHeaderRow}>
                <h3 className={servicesStyles.cardTitle}>{item1040.title}</h3>
                <div className={servicesStyles.arrowButtonAmber}>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {item1040.note && (
                <span className={servicesStyles.cardNote}>{item1040.note}</span>
              )}
              <p className={servicesStyles.cardDescription}>
                {item1040.description}
              </p>
            </div>

            <ul className={servicesStyles.featureList}>
              {item1040.features.map((f, idx) => (
                <li key={idx} className={servicesStyles.featureItem}>
                  <Check className={servicesStyles.featureIcon} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Link>

          {/* CARD 2: SCHEDULE C (Lavanda / Púrpura Suave) */}
          <Link
            href="/agendar"
            className={`${servicesStyles.cardBase} ${servicesStyles.cardLavender}`}
          >
            <div>
              <div className={servicesStyles.cardHeaderRow}>
                <h3 className={servicesStyles.cardTitle}>
                  {itemScheduleC.title}
                </h3>
                <div className={servicesStyles.arrowButtonLavender}>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <p className={servicesStyles.cardDescription}>
                {itemScheduleC.description}
              </p>
            </div>

            <ul className={servicesStyles.featureList}>
              {itemScheduleC.features.map((f, idx) => (
                <li key={idx} className={servicesStyles.featureItem}>
                  <Check className={servicesStyles.featureIcon} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Link>

          {/* CARD 3: TRAMITACIÓN ITIN W-7 (Azul Cielo Suave) */}
          <Link
            href="/agendar"
            className={`${servicesStyles.cardBase} ${servicesStyles.cardSky}`}
          >
            <div>
              <div className={servicesStyles.cardHeaderRow}>
                <h3 className={servicesStyles.cardTitle}>{itemItin.title}</h3>
                <div className={servicesStyles.arrowButtonSky}>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <p className={servicesStyles.cardDescription}>
                {itemItin.description}
              </p>
            </div>

            <ul className={servicesStyles.featureList}>
              {itemItin.features.map((f, idx) => (
                <li key={idx} className={servicesStyles.featureItem}>
                  <Check className={servicesStyles.featureIcon} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Link>

          {/* CARD 4: CARTAS DEL IRS (Coral / Rosa Suave) */}
          <Link
            href="/agendar"
            className={`${servicesStyles.cardBase} ${servicesStyles.cardRose}`}
          >
            <div>
              <div className={servicesStyles.cardHeaderRow}>
                <h3 className={servicesStyles.cardTitle}>{itemIrs.title}</h3>
                <div className={servicesStyles.arrowButtonRose}>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <p className={servicesStyles.cardDescription}>
                {itemIrs.description}
              </p>
            </div>

            <ul className={servicesStyles.featureList}>
              {itemIrs.features.map((f, idx) => (
                <li key={idx} className={servicesStyles.featureItem}>
                  <Check className={servicesStyles.featureIcon} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Link>

          {/* CARD 5: ENMIENDAS 1040-X (Verde Menta Suave) */}
          <Link
            href="/agendar"
            className={`${servicesStyles.cardBase} ${servicesStyles.cardEmerald}`}
          >
            <div>
              <div className={servicesStyles.cardHeaderRow}>
                <h3 className={servicesStyles.cardTitle}>
                  {itemAmended.title}
                </h3>
                <div className={servicesStyles.arrowButtonEmerald}>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <p className={servicesStyles.cardDescription}>
                {itemAmended.description}
              </p>
            </div>

            <ul className={servicesStyles.featureList}>
              {itemAmended.features.map((f, idx) => (
                <li key={idx} className={servicesStyles.featureItem}>
                  <Check className={servicesStyles.featureIcon} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Link>
        </div>
      </div>
    </section>
  );
}
