import { Entity, Column } from "typeorm";
import { BaseModel } from "../../core/base-entity.js";

@Entity("languages")

export class Language extends BaseModel{

    @Column({length: 32})
    title: string;
    
    @Column({length: 16})
    code: string;
}