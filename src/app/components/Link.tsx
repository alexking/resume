import React, { HTMLProps, forwardRef } from "react";

/**
 * External Link
 */
export type LinkProps = HTMLProps<HTMLAnchorElement>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, ...props },
  ref
) {
  return (
    <a
      {...props}
      ref={ref}
      target="_blank"
      className="underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2"
    >
      {children}
    </a>
  );
});
