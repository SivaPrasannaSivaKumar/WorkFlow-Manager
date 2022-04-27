import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public UserRegister !: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.UserRegister = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    })
  }

  saveUser() {
    this.http.post<any>("http://localhost:3000/User", this.UserRegister.value).subscribe(res => {
      this.UserRegister.reset();
      alert("User Registered Successfully!");

    },
      err => {
        console.log("Something went wrong");
      });
  }

}
