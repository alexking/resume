import React, { ReactNode } from "react";
import { FiExternalLink } from "react-icons/fi";
export interface CompanyProps {
  name: string;
  url?: string;
  children: ReactNode;
}

export const Company = ({ name, url, children }: CompanyProps) => {
  return (
    <div className="my-4">
      <h3 className="text-lg font-medium leading-none">
        {name}{" "}
        {url ? (
          <a href={url} target="_blank">
            <FiExternalLink className="inline-block align-[-0.08rem] w-3.5 h-3.5" />
          </a>
        ) : null}
      </h3>
      {children}
    </div>
  );
};
