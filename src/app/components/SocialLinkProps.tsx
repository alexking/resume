import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import { Link } from "./Link";
import { LinkProps } from "next/link";

export interface SocialLinkProps {
  icon: IconDefinition;
  href: string;
  children: ReactNode;
}

export const SocialLink = ({ icon, href, children }: SocialLinkProps) => {
  return (
    <>
      <Link href={href}>
        <FontAwesomeIcon
          className="inline h-5 mr-1.5 text-slate-800 dark:text-slate-400 align-[-0.33rem]"
          icon={icon}
        />
        {children}
      </Link>
    </>
  );
};
