import { StreamConsumerPaths } from "@/api/types/sse/sse-response.js";
import { useEffect, useState } from "react";
import { sendApiRequest } from "./send-api-request.js";
import { Request } from "./types/request/request.js";
import { StreamResponse } from "./types/response/stream-response.js";
import { Methods } from "./types/spec/endpoints.js";
import { SseEndpoints } from "./types/spec/sse-endpoints.js";
import { StreamProducerEndpoints } from "./types/spec/stream-producers.js";
import { Exact } from "./types/utility/exact.js";
import { useStreamData } from "./use-stream-data.js";

type R<T extends StreamProducerEndpoints> = Request<T> & { followStream: true };

const streams: Map<
  unknown[],
  StreamResponse<SseEndpoints> | Promise<StreamResponse<SseEndpoints>>
> = new Map();
function getCachedStream(
  key: unknown[],
): StreamResponse<SseEndpoints> | Promise<StreamResponse<SseEndpoints>> | null {
  for (const [storedKey, value] of streams.entries()) {
    if (
      storedKey.length === key.length &&
      storedKey.every((item, index) => item === key[index])
    ) {
      return value;
    }
  }

  return null;
}

export function useStream<
  TRoute extends StreamProducerEndpoints,
  const TRequest extends R<TRoute>,
>(
  endpoint: TRoute,
  request: Exact<TRequest, R<TRoute>>,
  key: unknown[],
): string[] {
  type Method =
    TRequest["method"] extends Methods<TRoute> ? TRequest["method"] : never;

  const [stream, setStream] = useState<StreamResponse<
    StreamConsumerPaths<TRoute, Method>
  > | null>(null);

  useEffect(() => {
    (async () => {
      const existingStream = getCachedStream(key);
      if (existingStream) {
        setStream((await existingStream) as typeof stream);
        return;
      }

      const x = sendApiRequest(
        endpoint,
        request as Exact<R<TRoute>, R<TRoute>>,
        {},
      );

      streams.set(
        key,
        x.then((x) => x.stream as StreamResponse<SseEndpoints>),
      );

      // @ts-ignore type mismatch
      setStream((await x).stream);
    })();
  }, [key]);

  return useStreamData(stream);
}
