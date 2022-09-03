import { DataSource } from "typeorm";
import { Skill } from "./entity/skill";
import { Wilder } from "./entity/wilder";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill],
});

export default dataSource;
