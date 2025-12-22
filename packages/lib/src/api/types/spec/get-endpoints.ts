import { Endpoints, Methods } from "@/api/types/spec/endpoints";
import { SseEndpoints } from "./sse-endpoints";

type ExtractGetEndpoints<T extends Endpoints> = T extends unknown
  ? "get" extends Methods<T>
    ? T
    : never
  : never;

export type GetEndpoints = Exclude<
  ExtractGetEndpoints<Endpoints>,
  SseEndpoints
>;
