import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import { Wilder } from "./entity/wilder";

const app = express();

const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder],
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = 5000;

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
};

void start();
