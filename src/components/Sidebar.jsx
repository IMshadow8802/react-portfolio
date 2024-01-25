import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeIcon,UserIcon,BriefcaseIcon,EnvelopeOpenIcon } from '@heroicons/react/24/solid'
import Switch from "./Switch";
import { useMediaQuery } from "react-responsive";

const menuItems = [
    { name: "Home", icon: HomeIcon, path: "/home" },
    { name: "About", icon: UserIcon, path: "/about" },
    { name: "Portfolio", icon: BriefcaseIcon, path: "/portfolio" },
    { name: "Contact", icon: EnvelopeOpenIcon, path: "/contact" },
  ];
  
  const Sidebar = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });

    const sidebarStyle = isSmallScreen
        ? "fixed bottom-0 left-0 right-0 flex justify-evenly bg-transparent p-4"
        : "absolute right-10 top-0 flex flex-col items-center justify-center h-full w-16 bg-transparent";

    return (
        <motion.div
            className={sidebarStyle}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "ease", duration: 0.5 }}
        >
            {isSmallScreen ? null : <Switch />}
            {menuItems.map((item, index) => (
                <Link to={item.path} key={index}>
                    <SidebarItem icon={item.icon} text={item.name} showText={!isSmallScreen} />
                </Link>
            ))}
        </motion.div>
    );
};
  

const SidebarItem = ({ icon: Icon, text, showText }) => {
    const [isHovered, setIsHovered] = React.useState(false);
  
    const textVariants = {
      hidden: { x: 20, opacity: 0 }, // Start from the right of the icon
      visible: {
        x: 10, // Only partially come into view
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' } // Slower transition
      },
    };
  
    return (
        <div 
            className="my-4 flex items-center relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {showText && (
                <motion.div
                    className="text-black font-semibold bg-[#fbbf24] px-8 py-3 rounded-l-full absolute right-0 mr-12 z-0"
                    variants={textVariants}
                    initial="hidden"
                    animate={isHovered ? "visible" : "hidden"}
                >
                    {text}
                </motion.div>
            )}
            <div className={`rounded-full p-4 z-10 ${isHovered ? 'bg-[#fbbf24]' : 'bg-gray-200'}`}>
                <Icon className="h-6 w-6 text-gray-500" />
            </div>
        </div>
    );
  };
  
  

export default Sidebar;
