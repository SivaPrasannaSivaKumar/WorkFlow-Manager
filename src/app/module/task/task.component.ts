import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Task } from 'src/app/Task';
import { TaskFetch } from 'src/app/task-fetch';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public TaskGroup !: FormGroup
  displayedColumns: string[] = ['id', 'taskname', 'description', 'status', 'action']
  Task: Task[] = []
  tf: TaskFetch
  completeText: string = "Completed"

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private rs: RestService) { }

  ngOnInit(): void {
    this.TaskGroup = this.formBuilder.group({
      taskname: ['', Validators.required],
      desc: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.rs.getTaskDetails().subscribe((res) => {
      this.Task = res
    }, (err) => {
      console.log(err)
    })
  }

  addTask() {
    this.http.post<any>("http://localhost:8080/addTask", this.TaskGroup.value).subscribe(res => {
      this.TaskGroup.reset()
      // this.TaskGroup.disable()
      // console.log(this.TaskGroup)
    },
      err => {
        console.log("Somsething went wrong" + err)
      }
    )
  }

  removeItem(element: any) {
    this.Task.forEach((value, index) => {
      if (value == element) {
        this.Task.splice(index, 1)
      }
    })
  }

  deleteRow(val: number) {
    this.rs.deleteTaskDetails(val).subscribe(data => {

    })

    this.rs.getTaskDetails().subscribe((res) => {
      this.Task = res
    })

    this.TaskGroup.enable()

  }

  updateTask(id: number) {
    this.router.navigate(['/update', id])
  }

}
