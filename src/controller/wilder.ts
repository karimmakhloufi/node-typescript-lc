import { Request, Response } from "express";
import dataSource from "../utils";
import { Wilder } from "../entity/wilder";

const wilderController = {
  create: async (req: Request, res: Response) => {
    const wilderToCreate = new Wilder();
    wilderToCreate.name = req.body.name;
    try {
      await dataSource.manager.save(Wilder, wilderToCreate);
      res.send("Wilder created");
    } catch (err) {
      console.log(err);
      res.send("Error while creating the wilder");
    }
  },
};

export default wilderController;
