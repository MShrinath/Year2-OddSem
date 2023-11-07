// server3.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const PORT = 4000;

// Mock data (replace with a database)
const todos = [
  { id: '1', text: 'Buy groceries', completed: false },
  { id: '2', text: 'Read a book', completed: true },
];

// Define the schema using SDL
const schema = buildSchema(`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(text: String!): Todo
    toggleTodo(id: ID!): Todo
  }
`);

// Resolver functions
const root = {
  todos: () => todos,
  addTodo: ({ text }) => {
    const newTodo = { id: String(todos.length + 1), text, completed: false };
    todos.push(newTodo);
    return newTodo;
  },
  toggleTodo: ({ id }) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      return todo;
    }
    return null;
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
