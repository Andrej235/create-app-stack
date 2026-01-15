import { useNavigationStore } from "../stores/navigation-store";

export function useNavigate(): (path: string) => Promise<void> | void {
  return useNavigationStore((s) => s.useNavigate)();
}
