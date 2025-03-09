import { ReactNode, HTMLAttributes } from "react";

type Variant = "default" | "leaderboard";
type Align = "left" | "center" | "right";

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export interface TableHeaderCellProps extends HTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
  className?: string;
  align?: Align;
}

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
  align?: Align;
}
