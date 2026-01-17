declare class ReadonlyURLSearchParams extends URLSearchParams {
  /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
  append(): void;
  /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
  delete(): void;
  /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
  set(): void;
  /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */
  sort(): void;
}

export let useQueryParams: () => ReadonlyURLSearchParams = () => {
  throw new Error("QueryParamsStore is not set up yet");
};

export function setUseSearchParams(
  queryParamsFn: () => ReadonlyURLSearchParams,
) {
  useQueryParams = queryParamsFn;
}
