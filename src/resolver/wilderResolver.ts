import { Query, Resolver } from "type-graphql";
import { Wilder } from "../entity/wilder";
import dataSource from "../utils";

@Resolver(Wilder)
export class WilderResolver {
  @Query(() => [Wilder])
  async getAllWilders(): Promise<Wilder[]> {
    return await dataSource.manager.find(Wilder, {
      relations: {
        grades: {
          skill: true,
        },
      },
    });
  }
}
