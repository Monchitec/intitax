"use client";

import * as React from "react";
import { Language, Dictionary, es, en } from "@/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
  mounted: boolean;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined,
);

let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "es";
  try {
    const saved = localStorage.getItem("intitax_lang") as Language | null;
    if (saved === "es" || saved === "en") return saved;
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("es") ? "es" : "en";
  } catch {
    return "es";
  }
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
    window.removeEventListener("storage", listener);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = React.useSyncExternalStore<Language>(
    subscribe,
    getStoredLanguage,
    () => "es",
  );
  const mounted = React.useSyncExternalStore<boolean>(
    () => () => {},
    () => true,
    () => false,
  );

  const setLanguage = React.useCallback((lang: Language) => {
    try {
      localStorage.setItem("intitax_lang", lang);
      document.documentElement.lang = lang;
      emitChange();
    } catch {
      // Ignorar errores de almacenamiento
    }
  }, []);

  const toggleLanguage = React.useCallback(() => {
    setLanguage(language === "es" ? "en" : "es");
  }, [language, setLanguage]);

  const t = language === "en" ? en : es;

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      mounted,
    }),
    [language, setLanguage, toggleLanguage, t, mounted],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage debe ser utilizado dentro de un LanguageProvider",
    );
  }
  return context;
}
