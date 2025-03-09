import { TableRowProps } from "./Table.types";

const variantStyles = {
  default: "hover:bg-gray-50",
  leaderboard: `border-b-2 border-auburn`,
};

export const TableRow: React.FC<TableRowProps> = ({ children, className = "", variant = "default", ...props }) => (
  <tr
    className={`${variantStyles[variant]} ${className}`}
    {...props}>
    {children}
  </tr>
);
