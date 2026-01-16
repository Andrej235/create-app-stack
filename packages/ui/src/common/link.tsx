import { AnchorHTMLAttributes, ComponentType } from "react";

export let Link: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function setLinkComponent(
  linkComponent: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>,
) {
  Link = linkComponent;
}
