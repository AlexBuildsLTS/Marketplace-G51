// src/components/theme/ThemeToggle.tsx
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      // If system, default to light
      setTheme("light");
    }
  };

  return (
    <Button
      variant="primary"
      onClick={toggleTheme}
      className="relative hover:bg-transparent">
      <Sun
        className={`h-5 w-5 transition-opacity duration-500 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
      />
      <Moon
        className={`h-5 w-5 absolute top-0 left-0 transition-opacity duration-500 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
