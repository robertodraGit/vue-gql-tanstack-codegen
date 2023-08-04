import { useQuery, UseQueryOptions, type UseQueryReturnType } from '@tanstack/vue-query';

type UseGraphqlProps<TResult, TVariables> = {
  headers?: HeadersInit;
  options?: UseQueryOptions<TResult, TVariables, TResult, (string | TVariables | undefined)[]>;
  query: string;
  variables?: TVariables;
};

type FetcherProps<TVariables> = {
  query: string;
  variables?: TVariables;
  headers?: HeadersInit;
};

export const fetcher = async <TResult, TVariables>({
                                                     query,
                                                     variables,
                                                     headers,
                                                   }: FetcherProps<TVariables>): Promise<TResult> => {
  const response: Response = await fetch(import.meta.env.VITE_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (response.status !== 200) {
    throw new Error(`Failed to fetch: ${response.statusText}. Body: ${await response.text()}`);
  }

  const json = await response.json();

  if (!json.data && json.errors.length > 0) {
    const originalError = json.errors[0].extensions.originalError;

    throw new Error(`Failed to fetch: ${originalError.statusCode}. Body: ${originalError.message}`);
  }

  return json.data;
};

export const useGraphql = <TResult, TVariables>({
                                                  headers,
                                                  options,
                                                  query,
                                                  variables,
                                                }: UseGraphqlProps<TResult, TVariables>): UseQueryReturnType<TResult, TVariables> => {
  const keys = [query, variables];

  const fn = () =>
    fetcher<TResult, TVariables>({
      headers,
      query,
      variables,
    });

  const queryOptions = {
    refetchOnWindowFocus: false,
    retry: 1,
    ...options,
  };

  return useQuery(keys, fn, queryOptions);
};
