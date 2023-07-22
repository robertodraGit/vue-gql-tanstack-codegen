import {gql} from '@/api/graphql-client';

export const getCharactersQuery = gql`
    query getCharacters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            results {
                id
                name
                location {
                    residents {
                        id
                        name
                        status
                        species
                        type
                        gender
                        image
                    }
                }
            }
            info {
                count
                pages
                next
                prev
            }
        }
    }

`
