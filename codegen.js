module.exports = {
  schema: [
    {
      "https://hasura.azurewebsites.net/v1/graphql": {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsic2Ftc3VuZ2FkbWluIiwiYWRtaW4iXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjA0NTgyNjcxLCJleHAiOjE2MDQ2NjkwNzF9.eLFdWFMdXhJe1fCvgSogMgrmE7RDxLNk8V6SdsV210c",
        },
      },
    },
  ],
  //   documents: ["./utils/**/*.tsx", "./utils/**/*.ts"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
