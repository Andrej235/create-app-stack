import { create } from "zustand";

type AuthStore = {
  initStorage: () => Promise<void>;
  logIn: (username: string, password: string) => Promise<boolean>;
  logOut: () => Promise<void>;
  getIsLoggedIn: () => Promise<boolean>;
  addAuthHeaders: (request: RequestInit) => Promise<RequestInit>;
};

export const useAuthStore = create<AuthStore>(() => ({
  getIsLoggedIn: async () => false,
  initStorage: async () => {},
  logIn: async () => false,
  logOut: async () => {},
  addAuthHeaders: async (request: RequestInit) => request,
}));
