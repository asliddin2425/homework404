import { Entity, Column, OneToMany } from "typeorm";
import { BaseModel } from "../../core/base-entity.js";

@Entity("categories")

export class Category extends BaseModel{

    @Column({length: 32})
    title: string;

    @OneToMany(() => BaseModel, entity => entity.id)
    entities: BaseModel[];
}