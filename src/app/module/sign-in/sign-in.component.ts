import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  public signInForm !: FormGroup

  ngOnInit(): void {
  }

  login() {
    this.http.get<any>("http://localhost:3000/Auth")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.signInForm.value.email && a.password === this.signInForm.value.password
        })
        if (user) {
          this.signInForm.reset()
          // this.router.navigate(['createProfile'])
        } else {
          alert("User not found")
        }
      }, err => {
        alert("Something went wrong")
      })
  }
}
