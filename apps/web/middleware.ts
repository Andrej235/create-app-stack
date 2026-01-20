import { setBaseApiUrl } from "@repo/lib/api/base-api-url";
import { sendApiRequest } from "@repo/lib/api/send-api-request";
import { useAuthStore } from "@repo/lib/stores/auth-store";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

setBaseApiUrl(process.env.NEXT_PUBLIC_BASE_API_URL!);
useAuthStore.getState().setup({
  addAuthHeaders: async (req) => {
    req.credentials = "include";
    const allCookies = (await cookies())
      .getAll()
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join("; ");

    if (req.headers)
      (req.headers as Record<string, string>)["Cookie"] = allCookies;
    else req.headers = { Cookie: allCookies };

    return req;
  },
  getIsLoggedIn: async () => false,
  initStorage: async () => {},
  logIn: async () => false,
  logOut: async () => false,
});

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") return; //landing page

  const loggedOutOnly =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register" ||
    request.nextUrl.pathname === "/confirm-email" ||
    request.nextUrl.pathname === "/reset-password";

  try {
    const { isOk: isLoggedIn } = await sendApiRequest("/users/check-auth", {
      method: "get",
    });
    console.log(request.nextUrl.pathname, "isLoggedIn:", isLoggedIn);

    if (loggedOutOnly) {
      if (isLoggedIn) return NextResponse.redirect(new URL("/", request.url));
      else return NextResponse.next();
    }

    if (isLoggedIn) return NextResponse.next();
    else return NextResponse.redirect(new URL("/login", request.url));
  } catch (error) {
    console.error("Error while redirecting:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
