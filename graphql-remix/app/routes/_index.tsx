import type { MetaFunction } from "@remix-run/node";
import { PrismaClient } from '@prisma/client';
import  express  from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

/*
const prisma = new PrismaClient();

const typeDefs = `
  type User {
    id: Int
    password: String
  }

  type Query {
    allUsers: [User!]!
  }
`;

const resolvers = {
    Query: {
      allUsers: () => {
        return prisma.authlist.findMany();
      }
    }
  };

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});  

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000);
*/


export const meta: MetaFunction = () => {
  return [
    { title: "Prisma Remix" },
    { name: "description", content: "Prisma Remix" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Prisma Remix</h1>
    </div>
  );
}
