import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './module/auth/sign-in/sign-in.component';
import { SignUpComponent } from './module/auth/sign-up/sign-up.component';
import { HomeComponent } from './module/home/home.component';
import { TaskComponent } from './module/task/task.component';
import { UpdateTaskComponent } from './module/update-task/update-task.component';
import { UserProfileComponent } from './module/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'update/:id', component: UpdateTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
