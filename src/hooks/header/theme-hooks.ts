import { useEffect, useState } from "react";

import type { ThemePreference } from "@/types/header";

const THEME_STORAGE_KEY = "gamehull-theme";

function getStoredThemePreference(): ThemePreference {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  return storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
    ? storedTheme
    : "system";
}

function getEffectiveTheme(themePreference: ThemePreference) {
  if (themePreference !== "system") {
    return themePreference;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemePreference(themePreference: ThemePreference) {
  const rootElement = document.documentElement;
  const effectiveTheme = getEffectiveTheme(themePreference);

  rootElement.classList.toggle("dark", effectiveTheme === "dark");
  rootElement.dataset.theme = effectiveTheme;

  return effectiveTheme;
}

export function useThemeSelector() {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">(() =>
    getEffectiveTheme(getStoredThemePreference()),
  );
  const [themePreference, setThemePreference] = useState<ThemePreference>(() =>
    getStoredThemePreference(),
  );

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    applyThemePreference(themePreference);

    if (themePreference !== "system") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      setEffectiveTheme(applyThemePreference("system"));
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [themePreference]);

  function handleThemeMenuOpenChange(isOpen: boolean) {
    setIsThemeMenuOpen(isOpen);
  }

  function handleThemeSelect(nextThemePreference: ThemePreference) {
    setEffectiveTheme(getEffectiveTheme(nextThemePreference));
    setThemePreference(nextThemePreference);
    setIsThemeMenuOpen(false);
  }

  return {
    effectiveTheme,
    handleThemeMenuOpenChange,
    handleThemeSelect,
    isThemeMenuOpen,
    themePreference,
  };
}
