"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { Button } from "@/components/shared/ui/button";
import { ctaStyles } from "./CtaSection.styles";

export function CtaSection() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section id="contacto" className={ctaStyles.section}>
      <div className={ctaStyles.container}>
        <div className={ctaStyles.bannerCard}>
          <div className={ctaStyles.ambientGlow} />

          <div className={ctaStyles.badge}>
            <span className={ctaStyles.badgeDot} />
            <span>{c.badge}</span>
          </div>

          <h2 className={ctaStyles.title}>{c.title}</h2>
          <p className={ctaStyles.subtitle}>{c.subtitle}</p>

          <div className={ctaStyles.buttonGroup}>
            <Link href="/contacto" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className={ctaStyles.btnPrimary}
              >
                <span>{c.buttonPrimary}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/servicios" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className={ctaStyles.btnSecondary}
              >
                <span>{c.buttonSecondary}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
