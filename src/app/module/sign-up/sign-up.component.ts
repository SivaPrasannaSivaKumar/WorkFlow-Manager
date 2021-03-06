import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Register } from 'src/app/Register';
import { RegisterFetch } from 'src/app/register-fetch';
import { SignupService } from 'src/app/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public UserRegister !: FormGroup;
  Register: Register[] = []
  rf: RegisterFetch

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private signUpServ: SignupService, private rs: RestService) { }


  ngOnInit(): void {
    this.UserRegister = this.formBuilder.group({
      username: ['', Validators.required],
      useremail: ['', Validators.required],
      userpassword: ['', Validators.required]
    });

    this.rs.getUserDetails().subscribe((res) => {
      this.Register = res
    }, (err) => {
      console.log(err)
    });
  }


  saveUser() {
    this.http.post<any>("http://localhost:8080/signup", this.UserRegister.value).subscribe((res) => {
      console.log(this.UserRegister);
      this.UserRegister.reset();
      this.router.navigate(['/signIn']);
    },
      err => {
        console.log("Something went wrong" + err);
      })
  }

}



