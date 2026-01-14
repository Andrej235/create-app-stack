import { sendApiRequest } from "../../send-api-request";
import { Request } from "../../types/request/request";
import { OmitKeyof } from "@tanstack/query-core";
import { UseQueryOptions } from "@tanstack/react-query";
import { RequestParameters } from "../request/parameters";
import { GetEndpoints } from "../spec/get-endpoints";
import { SseEndpoints } from "../spec/sse-endpoints";
import { StreamProducerEndpoints } from "../spec/stream-producers";
import { QueryCompatibleEndpoints } from "./query-compatible-endpoints";

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
