"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { footerStyles } from "./Footer.styles";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>
          {/* Brand Info */}
          <div className={footerStyles.brandCol}>
            <Link href="/" className={footerStyles.logoLink} aria-label="Intitax Inicio">
              {/* Modo Claro */}
              <Image
                src="/logo-clean.png"
                alt="Intitax"
                width={250}
                height={70}
                className="dark:hidden h-13 sm:h-16 w-auto object-contain"
              />
              {/* Modo Oscuro */}
              <Image
                src="/logo-transparent.png"
                alt="Intitax"
                width={250}
                height={70}
                className="hidden dark:block h-13 sm:h-16 w-auto object-contain"
              />
            </Link>

            <p className={footerStyles.description}>{f.description}</p>

            <div className={footerStyles.trustTag}>
              <span className="bg-accent-success h-1.5 w-1.5 animate-pulse rounded-full" />
              <span>Preparador Fiscal Certificado ante el IRS</span>
            </div>
          </div>

          {/* Column: Services */}
          <div>
            <h4 className={footerStyles.colTitle}>
              {f.sections.servicesTitle}
            </h4>
            <ul className={footerStyles.linkList}>
              <li>
                <Link href="/servicios" className={footerStyles.linkItem}>
                  Form 1040 (Personal)
                </Link>
              </li>
              <li>
                <Link href="/servicios" className={footerStyles.linkItem}>
                  Form 1040-X (Enmiendas)
                </Link>
              </li>
              <li>
                <Link href="/servicios" className={footerStyles.linkItem}>
                  Cartas del IRS
                </Link>
              </li>
              <li>
                <Link href="/servicios" className={footerStyles.linkItem}>
                  Trámite ITIN (W-7)
                </Link>
              </li>
              <li>
                <Link href="/servicios" className={footerStyles.linkItem}>
                  Schedule C (1099)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Quick Links */}
          <div>
            <h4 className={footerStyles.colTitle}>{f.sections.linksTitle}</h4>
            <ul className={footerStyles.linkList}>
              <li>
                <Link href="/servicios" className={footerStyles.linkItem}>
                  {t.navbar.services}
                </Link>
              </li>
              <li>
                <Link href="/contacto#faq" className={footerStyles.linkItem}>
                  {t.navbar.faq}
                </Link>
              </li>
              <li>
                <Link href="/contacto" className={footerStyles.linkItem}>
                  {t.navbar.contact}
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className={footerStyles.linkItem}>
                  {t.navbar.cta}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Contact */}
          <div>
            <h4 className={footerStyles.colTitle}>{f.sections.contactTitle}</h4>
            <ul className={footerStyles.linkList}>
              <li className="flex items-center gap-2">
                <Mail className="text-primary h-4 w-4 shrink-0" />
                <a
                  href="mailto:mcollahua@intitax.com"
                  className={footerStyles.linkItem}
                >
                  mcollahua@intitax.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <span>Atención Fiscal Digital en todo EE.UU.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className={footerStyles.bottomBar}>
          <p className={footerStyles.disclaimer}>{f.disclaimer}</p>
          <p className={footerStyles.copyright}>
            © {currentYear} Intitax. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
