import classNames from "classnames";
import React, { ReactNode } from "react";

export const ExperienceItems = ({ children }: { children: ReactNode }) => (
  <ul className="ml-2 my-1">{children}</ul>
);

export interface ExperienceItemProps {
  title: string;
  children: ReactNode;
  withHoverEffect?: boolean;
}

export const ExperienceItem = ({
  children,
  title,
  withHoverEffect = false,
}: ExperienceItemProps) => {
  return (
    <li className="leading-6 my-2 mb-3 break-inside-avoid">
      <h3
        className={classNames(
          "uppercase text-sm before:content-['❧_'] before:pr-1  before:inline-block dark:text-gray-300",
          {
            "hover:before:scale-125 before:transition-transform":
              withHoverEffect,
          }
        )}
      >
        {title}
      </h3>
      <p>{children}</p>
    </li>
  );
};
