import { TableHeaderProps } from "./Table.types";

const variantStyles = {
  default: "bg-gray-100",
  leaderboard: "bg-auburn text-pale-gold font-bold italic text-xl sticky top-0",
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => (
  <thead className={`${variantStyles[variant]} ${className}`} {...props}>
    {children}
  </thead>
);
