"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { themeToggleStyles } from "./ThemeToggle.styles";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return (
      <button
        type="button"
        className={themeToggleStyles.button}
        aria-label="Alternar modo claro y oscuro"
        disabled
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={themeToggleStyles.button}
      aria-label="Alternar modo claro y oscuro"
      title={
        resolvedTheme === "dark"
          ? "Cambiar a modo claro"
          : "Cambiar a modo oscuro"
      }
    >
      <Sun className={themeToggleStyles.iconSun} />
      <Moon className={themeToggleStyles.iconMoon} />
      <span className="sr-only">Alternar tema</span>
    </button>
  );
}
