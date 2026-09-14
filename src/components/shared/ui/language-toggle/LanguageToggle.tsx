"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
import { languageToggleStyles } from "./LanguageToggle.styles";

export function LanguageToggle() {
  const { language, setLanguage, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className={languageToggleStyles.container} aria-label="Idioma">
        <Globe className={languageToggleStyles.globeIcon} />
        <span className={languageToggleStyles.activeButton}>ES</span>
        <span className={languageToggleStyles.separator}>/</span>
        <span className={languageToggleStyles.inactiveButton}>EN</span>
      </div>
    );
  }

  const isEs = language === "es";

  return (
    <div
      className={languageToggleStyles.container}
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <Globe className={languageToggleStyles.globeIcon} />
      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={
          isEs
            ? languageToggleStyles.activeButton
            : languageToggleStyles.inactiveButton
        }
        aria-pressed={isEs}
        aria-label="Español"
        title="Cambiar a Español (ES)"
      >
        ES
      </button>
      <span className={languageToggleStyles.separator} aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={
          !isEs
            ? languageToggleStyles.activeButton
            : languageToggleStyles.inactiveButton
        }
        aria-pressed={!isEs}
        aria-label="English"
        title="Switch to English (EN)"
      >
        EN
      </button>
    </div>
  );
}
