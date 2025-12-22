import type { useQuery as useTanQuery } from "@tanstack/react-query";
import { StreamResponse } from "../response/stream-response.js";
import { UnwrappedRestResponse } from "../rest/rest-response.js";
import { Methods } from "../spec/endpoints.js";
import { GetEndpoints } from "../spec/get-endpoints.js";
import { SseEndpoints } from "../spec/sse-endpoints.js";
import { StreamProducerEndpoints } from "../spec/stream-producers.js";
import { StreamConsumerPaths } from "../sse/sse-response.js";
import { QueryCompatibleEndpoints } from "./query-compatible-endpoints.js";
import { QueryOptions } from "./query-options.js";

export type TanStackQueryResponse<T> = ReturnType<typeof useTanQuery<T>>;

export type QueryResponse<
  TRoute extends QueryCompatibleEndpoints,
  TOptions extends QueryOptions<TRoute>,
> = TRoute extends GetEndpoints
  ? TanStackQueryResponse<UnwrappedRestResponse<TRoute, "get">>
  : TRoute extends SseEndpoints
    ? TanStackQueryResponse<StreamResponse<TRoute>>
    : TRoute extends StreamProducerEndpoints
      ? TOptions extends {
          method: infer Method;
        }
        ? Method extends Methods<TRoute>
          ? TanStackQueryResponse<
              StreamResponse<StreamConsumerPaths<TRoute, Method>>
            >
          : never
        : never
      : never;
