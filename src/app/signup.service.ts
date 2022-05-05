import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './Register'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signUp: string;

  constructor(private http: HttpClient) {
    this.signUp = "http://localhost:4200/signup"
  }

  public save(reg: Register) {
    return this.http.post<Register>(this.signUp, reg);
  }
}
