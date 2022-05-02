import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from './Task';
import { TaskFetch } from './task-fetch';
import { Register } from './Register';
import { RegisterFetch } from './register-fetch';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('content-type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }


  getTask: string = "http://localhost:8080/getTask";
  deleteTask: string = "http://localhost:8080/deleteTask";
  updateTask: string = "http://localhost:8080/updateTask";
  getUser: string = "http://localhost:8080/getUser";
  deleteUser: string = "http://localhost:8080/deleteUser"

  getTaskDetails() {
    return this.http.get<Task[]>(this.getTask);
  }

  deleteTaskDetails(id: number): Observable<Task> {
    const url = `${this.deleteTask}/${id}`;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  getUpdateTaskDetails(id: number): Observable<Task> {
    const url = `${this.updateTask}/${id}`;
    return this.http.get<Task>(url, this.httpOptions);
  }

  updateTaskDetails(tf: TaskFetch): Observable<Task> {
    const url = `${this.updateTask}/${tf.id}`;
    return this.http.put<Task>(url, tf, this.httpOptions).pipe(
      map(() => tf)
    )
  }

  getUserDetails() {
    return this.http.get<Register[]>(this.getUser);
  }

  deleteUserDetails(id: number): Observable<Register> {
    const auth = `${this.deleteUser}/${id}`;
    return this.http.delete<Register>(auth, this.httpOptions);
  }

  // getUpdateUserDetails(id: number): Observable<Register> {
  //   const auth = `${this.auth}/${id}`;
  //   return this.http.get<Register>(auth, this.httpOptions);
  // }

  // updateUserDetails(rf: RegisterFetch): Observable<Register> {
  //   const auth = `${this.auth}/${rf.id}`;
  //   return this.http.put<Register>(auth, rf, this.httpOptions).pipe(
  //     map(() => rf)
  //   )
  // }

}
