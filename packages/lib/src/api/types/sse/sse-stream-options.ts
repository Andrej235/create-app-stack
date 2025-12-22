import { RequestParameters } from "../request/parameters.js";
import { SseEndpoints } from "../spec/sse-endpoints.js";

export type SseStreamOptions<Endpoint extends SseEndpoints> = {
  omitCredentials?: boolean;
  abortSignal?: AbortSignal;
} & RequestParameters<Endpoint, "get">;
