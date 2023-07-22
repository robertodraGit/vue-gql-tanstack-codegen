import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://rickandmortyapi.com/graphql',
    documents: ['src/api/**/*.ts'],
    ignoreNoDocuments: true,
    watch: true,
    generates: {
        './src/gql/': {
            preset: 'client',
            config: {
                useTypeImports: true,
            },
        },
    },
    config: {
        fetcher: 'graphql-request',
    },
};

export default config;
