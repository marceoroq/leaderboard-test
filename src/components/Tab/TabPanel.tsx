import { useTabContext } from "./Tab.context";

interface TabPanelProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ id, children, className = "" }) => {
  const { activeTab } = useTabContext();
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      className={className}
      tabIndex={0}>
      {children}
    </div>
  );
};
