import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import dataSource from "./utils";
import { buildSchema } from "type-graphql";
import { WilderResolver } from "./resolver/wilderResolver";

const port = 5000;

const start = async (): Promise<void> => {
  await dataSource.initialize();
  const schema = await buildSchema({ resolvers: [WilderResolver] });
  const server = new ApolloServer({ schema });

  const { url }: { url: string } = await server.listen({ port });
  console.log(`🚀  Server ready at ${url}`);
};

void start();
