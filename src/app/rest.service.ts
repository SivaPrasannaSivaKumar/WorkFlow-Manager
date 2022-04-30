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


  url: string = "http://localhost:3000/Task";
  auth: string = "http://localhost:3000/Auth";

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

  updateTaskDetails(tf: TaskFetch): Observable<Task> {
    const url = `${this.url}/${tf.id}`;
    return this.http.put<Task>(url, tf, this.httpOptions).pipe(
      map(() => tf)
    )
  }

  getUserDetails() {
    return this.http.get<Register[]>(this.auth);
  }

  deleteUserDetails(id: number): Observable<Register> {
    const auth = `${this.auth}/${id}`;
    return this.http.delete<Register>(auth, this.httpOptions);
  }

  getUpdateUserDetails(id: number): Observable<Register> {
    const auth = `${this.auth}/${id}`;
    return this.http.get<Register>(auth, this.httpOptions);
  }

  updateUserDetails(rf: RegisterFetch): Observable<Register> {
    const auth = `${this.auth}/${rf.id}`;
    return this.http.put<Register>(auth, rf, this.httpOptions).pipe(
      map(() => rf)
    )
  }

}
