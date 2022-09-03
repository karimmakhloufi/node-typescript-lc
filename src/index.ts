import "reflect-metadata";
import express from "express";
import dataSource from "./utils";
import wilderController from "./controller/wilder";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/api/wilder", wilderController.create);

const port = 5000;

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
};

void start();
