import { TableProps } from "./Table.types";

const variantStyles = {
  default: "",
  leaderboard: "h-full bg-auburn rounded-lg overflow-auto",
};

export const Table: React.FC<TableProps> = ({ children, className = "", variant = "default", ...props }) => (
  <div className={`w-full ${variantStyles[variant]} ${className}`} {...props}>
    <table className="w-full">{children}</table>
  </div>
);
