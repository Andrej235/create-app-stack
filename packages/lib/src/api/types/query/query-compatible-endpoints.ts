import { GetEndpoints } from "../spec/get-endpoints.js";
import { SseEndpoints } from "../spec/sse-endpoints.js";
import { StreamProducerEndpoints } from "../spec/stream-producers.js";

export type QueryCompatibleEndpoints =
  | GetEndpoints
  | SseEndpoints
  | StreamProducerEndpoints;
