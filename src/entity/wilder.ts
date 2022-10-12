import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Grade } from "./grade";

@ObjectType()
@Entity()
export class Wilder {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Grade, (grade) => grade.wilder)
  public grades: Grade[];
}
