import { Endpoints, Methods } from "@/api/types/spec/endpoints.js";
import { SseEndpoints } from "./sse-endpoints.js";

type ExtractGetEndpoints<T extends Endpoints> = T extends unknown
  ? "get" extends Methods<T>
    ? T
    : never
  : never;

export type GetEndpoints = Exclude<
  ExtractGetEndpoints<Endpoints>,
  SseEndpoints
>;
