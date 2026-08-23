"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/shared/providers";
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
        <Globe className="h-4 w-4 text-primary" />
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
      title={isEs ? "Switch to English (EN)" : "Cambiar a Español (ES)"}
    >
      <Globe className="h-4 w-4 text-primary" />
      <span className={languageToggleStyles.langText}>
        {isEs ? "ES" : "EN"}
      </span>
    </button>
  );
}
