"use client";

import React, { createContext, useState, useContext } from "react";

interface TabContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabProviderProps {
  defaultTab: string;
  children: React.ReactNode;
}

export const TabProvider: React.FC<TabProviderProps> = ({ defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>;
};

export const useTabContext = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext most be used inside TabProvider");
  }
  return context;
};
