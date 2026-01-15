import { useNavigationStore } from "@repo/lib/stores/navigation-store";
import { AnchorHTMLAttributes, JSX } from "react";

export function Link(
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
): JSX.Element {
  const Link = useNavigationStore((s) => s.Link);
  return <Link {...props} />;
}
