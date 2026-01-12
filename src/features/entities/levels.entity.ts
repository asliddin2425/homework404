import { Entity, Column } from "typeorm";
import { BaseModel } from "../../core/base-entity.js";

@Entity("levels")
export class Level extends BaseModel{
    @Column({length: 32})
    title: string;

    @Column({length: 64})
    icon: string;
}