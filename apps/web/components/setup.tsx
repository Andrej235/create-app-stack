"use client";
import { useSetBaseApiUrl } from "@repo/lib/api/base-api-url";
import { sendApiRequest } from "@repo/lib/api/send-api-request";
import { useAuthStore } from "@repo/lib/stores/auth-store";
import { useEffect, useRef } from "react";

export function Setup() {
  const setupComplete = useRef(false);
  useSetBaseApiUrl(process.env.NEXT_PUBLIC_BASE_API_URL!);
  const setupAuth = useAuthStore((x) => x.setup);

  useEffect(() => {
    if (setupComplete.current) return;
    setupComplete.current = true;

    setupAuth({
      addAuthHeaders: async (headers) => {
        headers.credentials = "include";
        return headers;
      },

      getIsLoggedIn: async () => {
        const { isOk } = await sendApiRequest("/users/check-auth", {
          method: "get",
        });

        return isOk;
      },

      // no op since we use cookie-based auth
      initStorage: async () => {},

      logIn: async (username, password) => {
        console.log("first");

        const { isOk } = await sendApiRequest(
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
            showToast: true,
            toastOptions: {
              success: "Logged in successfully",
              loading: "Logging in...",
              error: (e) => e.message || "Failed to log in",
            },
          },
        );

        return isOk;
      },

      logOut: async () => {
        const { isOk } = await sendApiRequest(
          "/users/logout/cookie",
          {
            method: "post",
          },
          {
            showToast: true,
            toastOptions: {
              success: "Logged out successfully",
              loading: "Logging out...",
              error: (e) => e.message || "Failed to log out",
            },
          },
        );

        return isOk;
      },
    });
  }, [setupAuth]);

  return null;
}
