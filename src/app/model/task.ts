import {TaskStatus} from "../enum/enum"
import { Guid } from "guid-typescript";

export class Task{
    title :String;
    status :TaskStatus;
    id;
    constructor(title: any){
        this.title = title;
        this.status =  TaskStatus.Active;
        this.id = Guid.create();
    }
}
