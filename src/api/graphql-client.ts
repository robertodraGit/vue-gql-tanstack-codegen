import {GraphQLClient, gql} from 'graphql-request';

const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_ENDPOINT);

export {gql, client};
