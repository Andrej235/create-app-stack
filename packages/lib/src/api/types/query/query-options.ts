import { sendApiRequest } from "@/api/send-api-request.js";
import { Request } from "@/api/types/request/request.js";
import { OmitKeyof } from "@tanstack/query-core";
import { UseQueryOptions } from "@tanstack/react-query";
import { RequestParameters } from "../request/parameters.js";
import { GetEndpoints } from "../spec/get-endpoints.js";
import { SseEndpoints } from "../spec/sse-endpoints.js";
import { StreamProducerEndpoints } from "../spec/stream-producers.js";
import { QueryCompatibleEndpoints } from "./query-compatible-endpoints.js";

type TanstackOptions = OmitKeyof<
  UseQueryOptions<unknown, unknown, unknown, unknown[]>,
  "initialData" | "queryFn"
>;

export type QueryOptions<Route extends QueryCompatibleEndpoints> =
  TanstackOptions &
    GetOptions<Route> &
    SseOptions<Route> &
    StreamProducerOptions<Route> &
    Parameters<typeof sendApiRequest>[2];

type GetOptions<Route> = Route extends GetEndpoints
  ? RequestParameters<Route, "get">
  : object;

type SseOptions<Route> = Route extends SseEndpoints
  ? RequestParameters<Route, "get"> & { stream: true }
  : object;

type StreamProducerOptions<Route> = Route extends StreamProducerEndpoints
  ? Request<Route> & { followStream: true }
  : object;
