import { TaskStatus } from './../enum/enum';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks:any;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(task : Task){
    if(task.status == TaskStatus.Active){
      task.status = TaskStatus.Done;
    }
    else{
      task.status = TaskStatus.Active;
    }
  }

  deleteTask(task: { id: any; }){
    let index = this.tasks.findIndex((item: { [x: string]: any; }) => item['id'] == task.id);
    this.tasks.splice(index,1)
  }

}
