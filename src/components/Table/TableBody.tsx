import { TableBodyProps } from "./Table.types";

export const TableBody: React.FC<TableBodyProps> = ({ children, className = "", ...props }) => (
  <tbody
    className={className}
    {...props}>
    {children}
  </tbody>
);
