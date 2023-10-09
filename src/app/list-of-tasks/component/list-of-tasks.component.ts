import { Component, OnInit } from '@angular/core';
import { ListOfTasksService } from '../service/list-of-tasks.service';
import { Task } from '../model/Task';

@Component({
  selector: 'list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css']
})
export class ListOfTasksComponent  implements OnInit {
  tasks : Task[] = [];
  description : string ="";

  constructor(private _service : ListOfTasksService){}

  getTasks(){
    this._service.getListOfTasks().subscribe(
      (data : Task []) => {
        this.tasks = data || [];
        console.log("Tasks :",this.tasks);
        console.log("Payload :",data);
      }
    );
  }

  deleteTask(idTask:number){
    this._service.deleteTask(idTask).subscribe(
      () => {this.getTasks();}
    );
  }

  addTask(){
    if(this.description!=""){
      this._service.addTask(this.description).subscribe(
        () => {this.getTasks();}
      );
    }
  }

  checkTask(idTask:number, taskState:string){
    this._service.checkTask(idTask, taskState).subscribe(
      () => {this.getTasks();}
    );
  }

  ngOnInit(){
    this.getTasks();
  }

}
