import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server";
import dataSource from "./utils";
import { Wilder } from "./entity/wilder";

const typeDefs = gql`
  type Wilder {
    name: String
    grades: [Grade]
  }

  type Skill {
    name: String
  }

  type Grade {
    grade: Int
    skill: Skill
  }

  type Query {
    getAllWilders: [Wilder]
  }
`;

const resolvers = {
  Query: {
    getAllWilders: async () => {
      const allWilders = await dataSource.manager.find(Wilder, {
        relations: {
          grades: {
            skill: true,
          },
        },
      });
      console.log(JSON.stringify(allWilders, null, 2));
      return allWilders;
    },
  },
};

const port = 5000;

const start = async (): Promise<void> => {
  await dataSource.initialize();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await server.listen({ port });
  console.log(`🚀  Server ready at ${url}`);
};

void start();
