import { gql } from '@/api/graphql-client.ts';

export const characterFragment = gql`
    fragment character on Character {
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
`

export const infoFragment = gql`
    fragment info on Info {
        count
        pages
        next
        prev
    }
`
