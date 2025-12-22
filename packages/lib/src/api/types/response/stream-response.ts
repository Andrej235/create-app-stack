import { SseEndpoints } from "../spec/sse-endpoints.js";
import { SseEvent } from "../sse/sse-event.js";
import { SseResponse } from "../sse/sse-response.js";

export type StreamResponse<Endpoint> = Endpoint extends unknown
  ? Endpoint extends SseEndpoints
    ? AsyncIterable<SseEvent<SseResponse<Endpoint>>> & {
        cancel: () => void;
      }
    : never
  : never;
