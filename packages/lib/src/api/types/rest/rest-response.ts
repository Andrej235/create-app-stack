import { Endpoints, Methods, Paths } from "../spec/endpoints.js";
import { ParseSchemaProperty } from "../schema/property-parser.js";
import { IsCodeOk } from "../utility/is-code-ok.js";

export type RestResponse<
  Endpoint extends Endpoints,
  Method extends Methods<Endpoint>,
> = Paths[Endpoint][Method] extends {
  responses: infer Responses;
}
  ? {
      code: keyof Responses;
      isOk: boolean;
      error:
        | ({
            message: string;
          } & Record<string, unknown>)
        | null;
      response: ParseResponse<Responses[IsCodeOk<keyof Responses>]> | null;
    }
  : null;

type ParseResponse<Response> = Response extends {
  content: {
    "application/json": {
      schema: infer Schema;
    };
  };
}
  ? ParseSchemaProperty<Schema>
  : never;

export type UnwrappedRestResponse<
  Endpoint extends Endpoints,
  Method extends Methods<Endpoint>,
> = Paths[Endpoint][Method] extends {
  responses: infer Responses;
}
  ? ParseResponse<Responses[IsCodeOk<keyof Responses>]> | null
  : null;
