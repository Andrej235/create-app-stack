import { StreamConsumerPaths } from "@/api/types/sse/sse-response.js";
import { Request } from "../request/request.js";
import { RestResponse } from "../rest/rest-response.js";
import { Endpoints, Methods } from "../spec/endpoints.js";
import { StreamResponse } from "./stream-response.js";

export type Response<
  TEndpoint extends Endpoints,
  TRequest extends Request<TEndpoint>,
> = TRequest extends {
  method: infer Method;
}
  ? Method extends Methods<TEndpoint>
    ? RestResponse<TEndpoint, Method> & Stream<TRequest, TEndpoint, Method>
    : never
  : never;

type Stream<
  TRequest extends Request<TEndpoint>,
  TEndpoint extends Endpoints,
  TMethod extends Methods<TEndpoint>,
> = TRequest extends { followStream: true }
  ? {
      stream: StreamResponse<StreamConsumerPaths<TEndpoint, TMethod>> | null;
    }
  : object;
