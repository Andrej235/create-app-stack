import { ComponentType, HTMLProps } from "react";
import { create } from "zustand";

type NavigationStore = {
  useNavigate: () => (to: string) => Promise<void> | void;
  Link: ComponentType<HTMLProps<HTMLAnchorElement>>;

  setup: (values: Omit<NavigationStore, "setup">) => void;
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  Link: () => null,
  useNavigate: () => () => Promise.resolve(),
  setup: (values) =>
    set({
      ...values,
      setup: () => {
        throw new Error("NavigationStore is already set up");
      },
    }),
}));
