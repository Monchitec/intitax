"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { LanguageToggle } from "@/components/shared/ui/language-toggle";
import { ThemeToggle } from "@/components/shared/ui/theme-toggle";
import { navbarStyles } from "./Navbar.styles";

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { label: t.navbar.home, href: "/" },
    { label: t.navbar.services, href: "/servicios" },
    { label: t.navbar.contact, href: "/contacto" },
  ];

  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        {/* Brand / Logo */}
        <div className={navbarStyles.brandGroup}>
          <Link
            href="/"
            className={navbarStyles.logoLink}
            onClick={closeMobileMenu}
            aria-label="Intitax Inicio"
          >
            {/* Modo Claro */}
            <Image
              src="/logo-clean.png"
              alt="Intitax"
              width={220}
              height={62}
              priority
              className="dark:hidden h-11 sm:h-13 md:h-14 w-auto object-contain"
            />
            {/* Modo Oscuro */}
            <Image
              src="/logo-transparent.png"
              alt="Intitax"
              width={220}
              height={62}
              priority
              className="hidden dark:block h-11 sm:h-13 md:h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className={navbarStyles.desktopNav}
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navbarStyles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions (Idioma + Tema) */}
        <div className={navbarStyles.actionsGroup}>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className={navbarStyles.mobileTriggerGroup}>
          <LanguageToggle />
          <ThemeToggle />

          <button
            type="button"
            className={navbarStyles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={navbarStyles.mobileDrawer}>
          <nav
            className={navbarStyles.mobileNavList}
            aria-label="Navegación móvil"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={navbarStyles.mobileNavLink}
              >
                <span>{item.label}</span>
                <ArrowRight className="text-muted-foreground h-4 w-4" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
