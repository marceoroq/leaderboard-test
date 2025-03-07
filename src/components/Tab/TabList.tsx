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
      className={`flex space-x-1 border-b ${className}`}>
      {children}
    </div>
  );
};
