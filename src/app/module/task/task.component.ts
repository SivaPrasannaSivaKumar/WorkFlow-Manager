import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { Task } from 'src/app/service/Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public TaskGroup !: FormGroup;
  displayedColumns: string[] = ['id', 'taskname', 'description', 'status', 'action'];
  Task: Task[] = [];
  btnText: string = 'In Progress';
  icon: string = 'bi bi-three-dots';

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: Router, private rs: RestService) { }

  ngOnInit(): void {
    this.TaskGroup = this.formBuilder.group({
      taskName: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

  addTask() {
    this.http.post<any>("http://localhost:3000/Task", this.TaskGroup.value).subscribe(res => {
      this.TaskGroup.reset();
      this.TaskGroup.disable();
    },
      err => {
        console.log("Somsething went wrong");
      }
    );

    this.rs.getTaskDetails().subscribe((res) => {
      this.Task = res;
    },
      (err) => {
        console.log("Error occures", err);
      }
    );
  }

  removeItem(element: any) {
    this.Task.forEach((value, index) => {
      if (value == element) {
        this.Task.splice(index, 1);
      }
    });
  }

  changeText() {
    this.btnText = 'Completed';
    this.icon = 'bi bi-check';
    this.TaskGroup.enable();
  }

  deleteRow(val: number) {
    if (confirm("Are you sure?")) {
      this.rs.deleteTaskDetails(val).subscribe(data => {

      });

      this.rs.getTaskDetails().subscribe((res) => {
        this.Task = res;
      });

      this.TaskGroup.enable();

    }
  }

  viewRow(value: number){
    this.rs.viewTaskDetails(value).subscribe(data => {
      alert(data.taskname);
    })
  }

}
