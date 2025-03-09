import { TableHeaderCellProps } from "./Table.types";

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  children,
  className = "",
  align = "left",
  ...props
}) => (
  <th
    className={`px-6 pb-3 ${alignStyles[align]} ${className}`}
    {...props}>
    {children}
  </th>
);
