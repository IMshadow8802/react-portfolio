import React, { useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import useThemeStore from "../useThemeStore";
import { motion } from "framer-motion";

const Switch = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Define your animation variants
  const variants = {
    light: { rotate: 0, scale: 1 },
    dark: { rotate: 180, scale: 1 },
  };

  return (
    <div className="absolute top-4 z-50">
      <motion.div
        onClick={toggleTheme}
        className="p-4 rounded-full bg-gray-200 cursor-pointer hover:bg-[#fbbf24]"
        variants={variants}
        animate={isDarkMode ? "dark" : "light"}
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-gray-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-500" />
        )}
      </motion.div>
    </div>
  );
};

export default Switch;
