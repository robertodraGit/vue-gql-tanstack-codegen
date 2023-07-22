import {print} from 'graphql';
import {type TypedDocumentNode} from '@graphql-typed-document-node/core';
import {useQuery, UseQueryOptions, type UseQueryReturnType} from '@tanstack/vue-query';

async function fetcher<TResult, TVariables>({
                                                url,
                                                document,
                                                variables,
                                                headers,
                                            }: {
    url: string;
    document: TypedDocumentNode<TResult, TVariables>;
    variables?: TVariables;
    headers?: HeadersInit;
}): Promise<TResult> {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            ...headers,
        },
        body: JSON.stringify({
            query: print(document),
            ...variables,
        }),
    });

    if (response.status !== 200) {
        throw new Error(`Failed to fetch: ${response.statusText}. Body: ${await response.text()}`);
    }

    return await response.json();
}

export function useGraphql<TResult, TVariables>(
    document: TypedDocumentNode<TResult, TVariables>,
    headers?: HeadersInit,
    variables?: TVariables,
    options?: UseQueryOptions<TResult, TVariables, TResult, any[]>,
): UseQueryReturnType<TResult, TVariables> {
    return useQuery(
        [(document.definitions[0] as any).name.value, variables],
        () =>
            fetcher<TResult, TVariables>({
                url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
                document,
                variables,
                headers,
            }),
        options
    );
}
