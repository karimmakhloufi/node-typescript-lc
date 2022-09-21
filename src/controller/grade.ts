import { Request, Response } from "express";
import dataSource from "../utils";
import { Grade } from "../entity/grade";
import { Skill } from "../entity/skill";
import { Wilder } from "../entity/wilder";

const gradeController = {
  create: async (req: Request, res: Response) => {
    try {
      const gradeToCreate = new Grade();

      gradeToCreate.grade = req.body.grade;
      gradeToCreate.skill = await dataSource
        .getRepository(Skill)
        .findOneByOrFail({ name: req.body.skillName });
      gradeToCreate.wilder = await dataSource
        .getRepository(Wilder)
        .findOneByOrFail({ name: req.body.wilderName });

      await dataSource.manager.save(Grade, gradeToCreate);
      res.send("grade created");
    } catch (err) {
      console.log(err);
      res.send("Error while creating the grade");
    }
  },
};

export default gradeController;
