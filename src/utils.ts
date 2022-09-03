import { DataSource } from "typeorm";
import { Wilder } from "./entity/wilder";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder],
});

export default dataSource;
