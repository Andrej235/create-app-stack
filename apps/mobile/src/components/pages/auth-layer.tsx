import { useQuery } from "@repo/lib/api/use-query";
import { LoadingScreen } from "@repo/ui/loading-screen";
import { Navigate, Outlet } from "react-router";
import { api } from "../../lib/api";

// Only allow access to children if the user is NOT authenticated
export function AuthLayer() {
  const authStatus = useQuery(api, "/users/check-auth", {
    queryKey: ["user", "check-auth"],
  });

  if (authStatus.isLoading) return <LoadingScreen />;
  if (!authStatus.isError) return <Navigate to="/" replace />;

  return <Outlet />;
}
