import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/service/Task';
import { TaskFetch } from 'src/app/service/task-fetch';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }


  url: string = "http://localhost:3000/Task";

  getTaskDetails() {
    return this.http.get<Task[]>(this.url);
  }

  deleteTaskDetails(id: number): Observable<Task> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  getUpdateTaskDetails(id: number): Observable<Task> {
    const url = `${this.url}/${id}`;
    return this.http.get<Task>(url, this.httpOptions);
  }

  updateTaskDetails(task: TaskFetch): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.put<Task>(url, task, this.httpOptions).pipe(
      map(() => task)
    )
  }

  viewTaskDetails(id: number): Observable<Task>{
    const url = `${this.url}/${id}`;
    return this.http.get<Task>(url, this.httpOptions);
  }

}
