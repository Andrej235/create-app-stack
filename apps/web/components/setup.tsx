"use client";
import { setUseNavigate } from "@repo/lib/hooks/use-navigate";
import { setUseSearchParams } from "@repo/lib/hooks/use-search-params";
import { setLinkComponent } from "@repo/ui/common/link";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AnchorHTMLAttributes, ComponentType } from "react";

setUseNavigate(useNavigate);
setUseSearchParams(useSearchParams);
setLinkComponent(
  Link as ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>,
);

export function Setup() {
  return null;
}

function useNavigate() {
  const router = useRouter();
  return router.push;
}
