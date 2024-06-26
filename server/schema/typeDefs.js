const { gql } = require('apollo-server');

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: String
    title: String
    image: String
    link: String
  }

  type Auth {
    tokend: ID!
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  input SaveBookInput {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Query {
  me: User
  }

  type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: SaveBookInput!): User
  removeBook(bookId: ID!): User 
 }
`;

module.exports = typeDefs;
