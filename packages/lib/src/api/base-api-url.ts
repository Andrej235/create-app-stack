let apiUrl: string | null = null;

export function setBaseApiUrl(url: string): void {
  apiUrl = url.replace(/\/$/, "");
}

export function getBaseApiUrl(): string {
  if (!apiUrl) throw new Error("Base API URL is not set.");

  return apiUrl!;
}
