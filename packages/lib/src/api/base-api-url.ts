import { useEffect } from "react";
import { create } from "zustand";

const apiUrlStore = create<{
  url: string | null;
  setUrl: (url: string) => void;
}>((set) => ({
  url: null,
  setUrl: (url: string) => set({ url }),
}));

export function setBaseApiUrl(url: string): void {
  apiUrlStore.getState().setUrl(url.replace(/\/$/, ""));
}

export function useSetBaseApiUrl(url: string): void {
  const savedUrl = apiUrlStore((state) => state.url);
  const setUrl = apiUrlStore((state) => state.setUrl);

  useEffect(() => {
    if (savedUrl) return;
    setUrl(url.replace(/\/$/, ""));
  }, [savedUrl, setUrl]);
}

export function getBaseApiUrl(): string {
  const url = apiUrlStore.getState().url;
  if (!url) throw new Error("Base API URL is not set.");

  return url!;
}
