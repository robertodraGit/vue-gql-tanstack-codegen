import { gql } from '@/api/graphql-client';
import { characterFragment, infoFragment } from '@/api/fragments/characters.ts';
import { useGraphql } from '@/api/use-graphql.ts';
import { GetCharactersQuery, GetCharactersQueryVariables } from '@/gql/Gql.types.ts';
import { UseQueryOptions, UseQueryReturnType } from '@tanstack/vue-query';

export const getCharactersQuery = gql`
    query getCharacters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            results {
                ...character
            }
            info {
                ...info
            }
        }
    }
    ${characterFragment}
    ${infoFragment}
`;

export const getCharacters = (
  props?: GetCharactersQueryVariables,
  options?: UseQueryOptions<GetCharactersQuery, GetCharactersQueryVariables, GetCharactersQuery, any[]>,
): UseQueryReturnType<GetCharactersQuery, GetCharactersQueryVariables> => useGraphql({
  query: getCharactersQuery,
  variables: props,
  options,
});

