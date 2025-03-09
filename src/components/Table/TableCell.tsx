import { TableCellProps } from "./Table.types";

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const TableCell: React.FC<TableCellProps> = ({ children, className = "", align = "left", ...props }) => (
  <td
    className={`px-6 py-2 ${alignStyles[align]} ${className}`}
    {...props}>
    {children}
  </td>
);
