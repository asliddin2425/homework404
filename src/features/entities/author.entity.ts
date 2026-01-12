import { BaseModel,  } from "../../core/base-entity.js";
import {Entity, Column} from "typeorm"
@Entity("authors")
export class Author extends BaseModel{
    @Column({length: 32})
    name: string;
}