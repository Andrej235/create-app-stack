import { create } from "zustand";

type AuthStore = {
  initStorage: () => Promise<void>;
  addAuthHeaders: (request: RequestInit) => Promise<RequestInit>;

  logIn: (username: string, password: string) => Promise<boolean>;
  logOut: () => Promise<boolean>;
  getIsLoggedIn: () => Promise<boolean>;

  setup: (fns: Omit<AuthStore, "setup">) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  initStorage: async () => {},
  addAuthHeaders: async (request: RequestInit) => request,

  logIn: async () => false,
  logOut: async () => false,
  getIsLoggedIn: async () => false,

  setup: (fns) => {
    set({
      ...fns,
      setup: () => {
        throw new Error("Setup can only be called once");
      },
    });
  },
}));
