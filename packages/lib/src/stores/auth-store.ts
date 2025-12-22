import { create } from "zustand";

type AuthStore = {
  initStorage: () => Promise<void>;
  logOut: () => Promise<void>;
  getIsLoggedIn: () => Promise<boolean>;
  addAuthHeaders: (request: RequestInit) => Promise<RequestInit>;
};

export const useAuthStore = create<AuthStore>(() => ({
  getIsLoggedIn: async () => false,
  initStorage: async () => {},
  logOut: async () => {},
  addAuthHeaders: async (request: RequestInit) => request,
}));
