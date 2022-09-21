import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Grade } from "./grade";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Grade, (grade) => grade.wilder)
  public grades: Grade[];
}
