interface TabListProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const TabList: React.FC<TabListProps> = ({ children, className = "", ariaLabel = "Navegation tabs" }) => {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={`flex border-b-2 border-auburn w-full pl-4 gap-6 ${className}`}>
      {children}
    </div>
  );
};
