//server1.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const app = express();
const PORT = 4000;

// Define a simple GraphQL schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: {
            message: {
                type: GraphQLString,
                resolve: () => 'Hello, GraphQL World!',
            },
        },
    }),
});

// Create a GraphQL server with Express
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true, // Enable the GraphiQL UI for testing
    })
);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
