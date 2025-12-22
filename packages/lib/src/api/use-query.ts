import { Exact } from "@/api/types/utility/exact.js";
import { useQuery as useTanQuery } from "@tanstack/react-query";
import { getSseStream } from "./get-sse-stream.js";
import { sendApiRequest } from "./send-api-request.js";
import { QueryCompatibleEndpoints } from "./types/query/query-compatible-endpoints.js";
import { QueryOptions } from "./types/query/query-options.js";
import { QueryResponse } from "./types/query/query-response.js";
import { Request } from "./types/request/request.js";
import { SseEndpoints } from "./types/spec/sse-endpoints.js";

export function useQuery<
  const TRoute extends QueryCompatibleEndpoints,
  const TOptions extends QueryOptions<TRoute>,
>(
  route: TRoute,
  options?: Exact<TOptions, QueryOptions<TRoute>>,
): QueryResponse<TRoute, TOptions> {
  return useTanQuery({
    queryFn: async () => {
      if (options && "stream" in options) {
        return getSseStream(route as SseEndpoints, options);
      }

      const x = await sendApiRequest(
        route,
        options && "method" in options
          ? (options as unknown as Exact<Request<TRoute>, Request<TRoute>>)
          : ({
              method: "get",
              ...options,
            } as unknown as Exact<Request<TRoute>, Request<TRoute>>),
        {
          abortSignal: options?.abortSignal,
          omitCredentials: options?.omitCredentials,
          showToast: options?.showToast as true,
          toastOptions:
            options && "toastOptions" in options
              ? options.toastOptions
              : undefined,
        },
      );

      if (!x?.isOk)
        throw new Error(x?.error?.message ?? "Something went wrong");

      if (options && "method" in options) {
        if ("stream" in x) return x.stream;
        throw new Error(x?.error?.message ?? "Something went wrong");
      }

      return x.response;
    },
    refetchOnWindowFocus: false,
    ...options,
    queryKey: options?.queryKey ?? [route],
  }) as QueryResponse<TRoute, TOptions>;
}
