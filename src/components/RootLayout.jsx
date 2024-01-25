import React from 'react';
import {Sidebar } from '../components';
import useThemeStore from '../useThemeStore';
import "../components/Root.css"

const RootLayout = ({ children }) => {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`flex h-screen bottomWaveBackground ${isDarkMode ? 'bg-black' : 'bg-white'} animate`}
    >
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;

