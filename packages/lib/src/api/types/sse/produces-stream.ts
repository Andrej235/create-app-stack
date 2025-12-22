import { Endpoints, Methods, Paths } from "../spec/endpoints.js";

export type ProducesStream<
  Endpoint extends Endpoints,
  Method extends Methods<Endpoint>,
> = Paths[Endpoint][Method] extends {
  "x-stream": {
    role: "producer";
    consumers: [unknown];
  };
}
  ? true
  : never;
