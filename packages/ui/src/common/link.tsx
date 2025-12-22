import { AnchorHTMLAttributes, JSX } from "react";

export function Link(
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
): JSX.Element {
  return <a {...props} />;
}
