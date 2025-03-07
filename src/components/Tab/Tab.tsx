import { useTabContext } from "./Tab.context";

interface TabProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

export const Tab: React.FC<TabProps> = ({
  id,
  children,
  className = "",
  activeClassName = "bg-primary text-primary-foreground",
  inactiveClassName = "bg-muted hover:bg-muted/80 text-muted-foreground",
}) => {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = activeTab === id;

  return (
    <button
      role="tab"
      id={`tab-${id}`}
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      onClick={() => setActiveTab(id)}
      className={`
        px-4 py-2 rounded-t-lg font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        ${className}
        ${isActive ? activeClassName : inactiveClassName}
      `}>
      {children}
    </button>
  );
};
