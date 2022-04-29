import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './module/home/home.component';
import { NavbarComponent } from './module/navbar/navbar.component';
import { TaskComponent } from './module/task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { SignInComponent } from './module/sign-in/sign-in.component';
import { SignUpComponent } from './module/sign-up/sign-up.component';
import { UserProfileComponent } from './module/user-profile/user-profile.component';
import { UpdateTaskComponent } from './module/update-task/update-task.component';
import { CreateUserProfileComponent } from './module/create-user-profile/create-user-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TaskComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent,
    UpdateTaskComponent,
    CreateUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
