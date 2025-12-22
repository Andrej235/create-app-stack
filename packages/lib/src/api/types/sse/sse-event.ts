import { SseError } from "./sse-error.js";
import { SseMessage } from "./sse-message.js";

export type SseEvent<T> = SseMessage<T> | SseError;
