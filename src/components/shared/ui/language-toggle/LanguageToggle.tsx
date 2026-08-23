"use client";

import * as React from "react";
import { useLanguage } from "@/components/shared/providers";
import { SpainFlag, UsaFlag } from "./FlagIcons";
import { languageToggleStyles } from "./LanguageToggle.styles";

export function LanguageToggle() {
  const { language, toggleLanguage, mounted, t } = useLanguage();

  if (!mounted) {
    return (
      <button
        type="button"
        className={languageToggleStyles.button}
        aria-label="Cambiar idioma"
        disabled
      >
        <span className={languageToggleStyles.flagWrapper}>
          <SpainFlag className="h-3.5 w-5" />
        </span>
        <span className={languageToggleStyles.langText}>ES</span>
      </button>
    );
  }

  const isEs = language === "es";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={languageToggleStyles.button}
      aria-label={t.navbar.switchLanguage}
      title={isEs ? "Switch to English (EN)" : "Cambiar a Espa�ol (ES)"}
    >
      <span className={languageToggleStyles.flagWrapper}>
        {isEs ? (
          <SpainFlag className="h-3.5 w-5" />
        ) : (
          <UsaFlag className="h-3.5 w-5" />
        )}
      </span>
      <span className={languageToggleStyles.langText}>
        {isEs ? "ES" : "EN"}
      </span>
    </button>
  );
}
