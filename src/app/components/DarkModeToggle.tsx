"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useHasMounted } from "../hooks/useHasMounted";

export interface DarkModeToggleProps {}

export const DarkModeToggle = ({}: DarkModeToggleProps) => {
  const { theme, setTheme } = useTheme();

  // Wait until mounted to render
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    // The toggle is positioned absolutely so there's no need to put a
    // placeholder
    return null;
  }

  return (
    <button
      className="absolute top-1 right-1 p-2 print:hidden drop-shadow-sm"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      {theme == "dark" ? "☀️" : "🌕"}
    </button>
  );
};
