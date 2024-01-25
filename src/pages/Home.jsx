import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import useThemeStore from "../useThemeStore";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Minion from "../components/Minion";

const Home = () => {
  const { isDarkMode } = useThemeStore();
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  // Define the animation properties
  const textAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    whileHover: { scale: 1.1 },
  };

  // Adjust text size based on screen size
  const textSize = isSmallScreen ? "text-3xl" : "text-5xl";
  const paragraphSize = isSmallScreen ? "text-md" : "text-lg";

  return (
    <div className="flex-grow flex items-center justify-center h-full">
      <div className="text-center px-4">
        <motion.h1
          className={`${textSize} font-bold text-[#fbbf24]`}
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          transition={textAnimation.transition}
          whileHover={textAnimation.whileHover}
        >
          I'M AYUSH MISHRA
        </motion.h1>
        <motion.p
          className={`${textSize} font-bold ${isDarkMode?"text-white":"text-gray-500"}`}
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          transition={{ ...textAnimation.transition, delay: 0.3 }}
          whileHover={textAnimation.whileHover}
        >
          WEB DESIGNER
        </motion.p>
        <motion.p
          className={`${paragraphSize} ${
            isDarkMode ? "text-gray-200" : "text-gray-600"
          } mt-4 mx-auto max-w-prose`} // Adjust max width for multiline
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          transition={{ ...textAnimation.transition, delay: 0.6 }}
        >
          I'm an India-based web designer & front-end developer focused on
          crafting clean & user-friendly experiences. I am passionate about
          building excellent software that improves the lives of those around
          me.
        </motion.p>
        <div className="flex justify-center mt-6">
        <button
          className={`hover-fill-effect mt-6 rounded-full ${isDarkMode ? "bg-black" : "bg-white"} flex items-center justify-center border-[2px] border-yellow-400 relative overflow-hidden`}
        >
          <span className={`ml-2 px-4 font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-600"} `}>
            Learn More
          </span>
          <div className="rounded-full bg-[#fbbf24] px-4 py-3">
            <ArrowRightIcon className="h-8 w-8 text-white" />
          </div>
        </button>
        </div>
      </div>
      <div className="">
    {!isSmallScreen && <Minion />}
</div>
    </div>
  );
};

export default Home;
