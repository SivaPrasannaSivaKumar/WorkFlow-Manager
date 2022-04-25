import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { TaskComponent } from './module/task/task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
