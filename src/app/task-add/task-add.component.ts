import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Output() addTaskEventEmitter = new EventEmitter();

  taskForm: FormGroup = this.formBuilder.group({
    taskTitle: ["", [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.taskForm = this.formBuilder.group({
      taskTitle: ["", [Validators.required]]
    })

  }

  onKeyPress($event: any) {
    if(this,this.taskForm.valid){
      // alert('Task Entered');
      this.addTaskEventEmitter.emit(this.taskForm.value);
      this.taskForm.patchValue({
        taskTitle : ''
      })
    }
  }

}
