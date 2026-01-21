import { useQuery } from "@repo/lib/api/use-query";
import { useUserStore } from "@repo/lib/stores/user-store";
import { LoadingScreen } from "@repo/ui/loading-screen";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { api } from "../../lib/api";

// Only allow access to children if the user IS authenticated
export function AppLayer() {
  const user = useQuery(api, "/users/me", {
    queryKey: ["user", "me"],
  });

  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    if (!user.data) return;

    setUser(user.data);
  }, [user, setUser]);

  if (user.isLoading) return <LoadingScreen />;
  if (!user.data || user.isError) return <Navigate to="/login" replace />;

  return <Outlet />;
}
