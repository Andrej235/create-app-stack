import { LoadingScreen } from "@repo/ui/loading-screen";
import { Navigate, Outlet } from "react-router";
import { useLoggedIn } from "../../lib/use-auth-status";

// Only allow access to children if the user is NOT authenticated
export function AuthLayer() {
  const authStatus = useLoggedIn();

  if (authStatus.isLoading) return <LoadingScreen />;
  if (!authStatus.isError) return <Navigate to="/" replace />;

  return <Outlet />;
}
