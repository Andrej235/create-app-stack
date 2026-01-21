import { Api, createApi } from "@repo/lib/api/api";

if (!import.meta.env.VITE_BASE_API_URL)
  throw new Error("VITE_BASE_API_URL is not defined");

export const api = createApi({
  baseUrl: import.meta.env.VITE_BASE_API_URL!,

  addAuthHeaders: async (headers) => {
    headers.credentials = "include";
    return headers;
  },

  isLoggedIn: async (api: Api) => {
    const { isOk } = await api.sendRequest("/users/check-auth", {
      method: "get",
    });

    return isOk;
  },

  logIn: async (api, username, password) => {
    const { isOk } = await api.sendRequest(
      "/users/login",
      {
        method: "post",
        payload: {
          username,
          password,
          useCookies: true,
        },
      },
      {
        toasts: {
          success: "Logged in successfully",
          loading: "Logging in...",
          error: (e: Error) => e.message || "Failed to log in",
        },
      },
    );

    return isOk;
  },

  logOut: async (api) => {
    const { isOk } = await api.sendRequest(
      "/users/logout/cookie",
      {
        method: "post",
      },
      {
        toasts: {
          success: "Logged out successfully",
          loading: "Logging out...",
          error: (e) => e.message || "Failed to log out",
        },
      },
    );

    return isOk;
  },
});
