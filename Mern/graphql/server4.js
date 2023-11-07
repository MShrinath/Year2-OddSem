// server4.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const PORT = 4000;

// Mock data (replace with a database)
const users = [
  { id: '1', username: 'user1', email: 'user1@example.com' },
  { id: '2', username: 'user2', email: 'user2@example.com' },
];

// Define the schema using SDL
const schema = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!): User
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User
  }
`);

// Resolver functions
const root = {
  users: () => users,
  user: ({ id }) => users.find((user) => user.id === id),
  createUser: ({ username, email }) => {
    const newUser = { id: String(users.length + 1), username, email };
    users.push(newUser);
    return newUser;
  },
  updateUser: ({ id, username, email }) => {
    const user = users.find((u) => u.id === id);
    if (!user) return null;
    if (username) user.username = username;
    if (email) user.email = email;
    return user;
  },
  deleteUser: ({ id }) => {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return null;
    const deletedUser = users.splice(userIndex, 1)[0];
    return deletedUser;
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL for testing
  })
);

app.listen(PORT, () => {
  console.log(`GraphQL server is running at http://localhost:${PORT}/graphql`);
});
