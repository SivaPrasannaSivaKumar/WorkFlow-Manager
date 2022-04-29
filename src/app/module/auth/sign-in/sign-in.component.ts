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

  constructor(private formBuilder: FormBuilder, private route: Router, private http: HttpClient) { }

  public signInForm !: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.http.get<any>("http://localhost:3000/User")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.signInForm.value.email && a.password === this.signInForm.value.password
        });
        if (user) {
          this.signInForm.reset();
          this.route.navigate(['/home'])
        } else {
          alert("User not found");
        }
      }, err => {
        alert("Something went wrong");
      });
  }
}
