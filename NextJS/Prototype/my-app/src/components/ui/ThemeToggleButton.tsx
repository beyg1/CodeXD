"use client"

import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200/10 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4 text-yellow-300" />
      ) : (
        <Moon className="h-4 w-4 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
