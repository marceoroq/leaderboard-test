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
  activeClassName = "bg-auburn text-white scale-120 origin-bottom",
  inactiveClassName = "bg-muted text-auburn hover:bg-muted/80 hover:scale-110 hover:origin-bottom",
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
        px-4 py-2 rounded-t-lg font-medium transition-all border-2 border-b-0 border-auburn cursor-pointer
        ${className}
        ${isActive ? activeClassName : inactiveClassName}
      `}>
      {children}
    </button>
  );
};
