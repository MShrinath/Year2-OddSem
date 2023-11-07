//server2.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { books } = require('./data');

const app = express();
const PORT = 4000;

// Define the schema using SDL
const schema = buildSchema(`
  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`);

// Define resolvers for the Query type
const root = {
  books: () => books,
};

app.use('/graphql', graphqlHTTP({ schema, rootValue: root, graphiql: true }));

app.listen(PORT, () => {
  console.log(`GraphQL server is running at http://localhost:${PORT}/graphql`);
});