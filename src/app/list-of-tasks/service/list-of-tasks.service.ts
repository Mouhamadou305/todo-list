import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class ListOfTasksService {

  private _endpoint = 'tasks/';

  constructor(private _api: ApiService) { }
  
  getListOfTasks(): Observable<Task[]>{
    return this._api.getAll(this._endpoint);
  }

  deleteTask(id: number): Observable<Task[]>{
    return this._api.delete(this._endpoint, id);
  }

  addTask(description: string): Observable<Task[]>{
    return this._api.add(this._endpoint, new Task( Math.ceil(Math.random()*100000),description, "unchecked", Date.now().toString()));
  }

  checkTask(id: number, taskState: string): Observable<Task[]>{
    taskState = taskState=="checked"?"unchecked":"checked";
    return this._api.patch(this._endpoint, id, {"state": taskState});
  }

}
