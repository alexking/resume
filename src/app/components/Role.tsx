import React, { ReactNode } from "react";

export interface RoleProps {
  children: ReactNode;
  from: number;
  to?: number;
}

export const Role = ({ children, from, to }: RoleProps) => {
  return (
    <span className="text-sm text-slate-500 dark:text-slate-400 first:after:content-[',_']">
      {children} ({from}-{to ?? "present"})
    </span>
  );
};
