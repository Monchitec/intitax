"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { Button } from "@/components/shared/ui/button";
import { HeroTypewriterWindow } from "./HeroTypewriterWindow";
import { HeroFormsMarquee } from "./HeroFormsMarquee";
import { heroStyles } from "./HeroSection.styles";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.ambientGlow} />

      <div className={heroStyles.container}>
        <div className={heroStyles.grid}>
          {/* Left Column: Headline & CTAs */}
          <div className={heroStyles.contentCol}>
            <h1 className={heroStyles.title}>
              <span className={heroStyles.titleStart}>{t.hero.titleStart}</span>
              <span className={heroStyles.titleHighlight}>
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className={heroStyles.subtitle}>{t.hero.subtitle}</p>

            <div className={heroStyles.ctaGroup}>
              <Link href="/agendar" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  className={heroStyles.ctaBtnPrimary}
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/servicios" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className={heroStyles.ctaBtnSecondary}
                >
                  <span>{t.hero.ctaSecondary}</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Sleek Typewriter Animated Window */}
          <div className={heroStyles.visualCol}>
            <HeroTypewriterWindow />
          </div>
        </div>

        {/* Bottom Infinite Tax Forms Ticker */}
        <HeroFormsMarquee />
      </div>
    </section>
  );
}
