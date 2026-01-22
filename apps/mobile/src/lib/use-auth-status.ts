import { useQuery } from "@repo/lib/api/use-query";
import { api } from "./api";

export function useLoggedIn() {
  const query = useQuery(api, "/users/check-auth", {
    queryKey: ["user", "check-auth"],
    refetchOnWindowFocus: false,
  });

  return query;
}
