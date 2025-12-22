import { ProducesStream } from "../sse/produces-stream.js";
import { Endpoints, Methods } from "./endpoints.js";

type ExtractStreamProducers<Endpoint extends Endpoints> =
  Endpoint extends unknown
    ? ProducesStream<Endpoint, Methods<Endpoint>> extends never
      ? never
      : Endpoint
    : never;

export type StreamProducerEndpoints = ExtractStreamProducers<Endpoints>;
