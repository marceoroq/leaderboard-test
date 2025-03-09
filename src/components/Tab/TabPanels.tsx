interface TabPanelsProps {
  children: React.ReactNode;
  className?: string;
}

export const TabPanels: React.FC<TabPanelsProps> = ({ children, className = "" }) => {
  return <div className={`mt-4 overflow-hidden ${className}`}>{children}</div>;
};
