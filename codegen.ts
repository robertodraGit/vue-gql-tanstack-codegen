import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://rickandmortyapi.com/graphql',
    documents: ['src/api/**/*.ts'],
    ignoreNoDocuments: true,
    watch: true,
    generates: {
        './src/gql/Gql.types.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                {
                    add: {
                        placement: 'prepend',
                        content: [
                            '// @ts-nocheck',
                        ],
                    },
                },
            ],
            config: {
                useTypeImports: true,
            },
        },
    },
    config: {
        fetcher: 'graphql-request',
        skipTypename: true,
        maybeValue: 'T',
    },
};

export default config;
