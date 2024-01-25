// // RootLayout.jsx
// import React from "react";
// import { Particle, Sidebar} from "../components";
// import useThemeStore from "../useThemeStore";
// import "../components/Root.css"
// import Wave from "./wave";

// const RootLayout = ({ children }) => {
//   const { isDarkMode } = useThemeStore();

//   return (
//     <div
//       className={`flex h-screen  ${isDarkMode ? "bg-[#111111]" : "bg-white"}`}
//     >
//         <Sidebar / >
//       <Particle />
//       <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
//         {children}
//       </main>
      
//     </div>
//   );
// };

// export default RootLayout;

// RootLayout.jsx
import React from 'react';
import { Particle, Sidebar } from '../components';
import useThemeStore from '../useThemeStore';
import "../components/Root.css"

const RootLayout = ({ children }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`flex h-screen bottomWaveBackground ${isDarkMode ? 'bg-black' : 'bg-white'} animate`}
    >
      <Sidebar />
      <Particle />
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;

