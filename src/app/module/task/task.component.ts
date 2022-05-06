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
  showNewTask:boolean = false
  showViewTask:boolean = false
  showImg:boolean = true
  created:any="Created"
  inProgress:any = "In Progress"
  onHold:any = "On Hold"
  completed:any = "Completed"
  status:any=''

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private rs: RestService) { }

  ngOnInit(): void {
    this.TaskGroup = this.formBuilder.group({
      taskname: ['', Validators.required],
      desc: ['', Validators.required]
    });


    this.rs.getTaskDetails().subscribe(res => {
      this.Task = res
    }, err => {
      console.log(err)
    })
  }

  toggleNewTask(){
    this.showNewTask = true
    this.showViewTask = false
    this.showImg = false
  }

  toggleViewTask(){
    this.showNewTask = false
    this.showViewTask = true
    this.TaskGroup.disable()
    this.showImg = false
  }


  addTask() {
    this.http.post<any>("http://localhost:8080/addTask", this.TaskGroup.value).subscribe(res => {
      this.TaskGroup.reset()
      window.location.reload()
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

  updateTaskStatus(task: any, status: string) {
    task.status = status;
    this.rs.updateTaskDetails(task).subscribe((res) => {
      console.log(res);
    });
  }

  hold(element:any){
    this.created = this.onHold
    var selectedElement = this.Task.filter(i => i.id === element);
    selectedElement.forEach((value, index) => {
      // value.status = 'hold';
      this.updateTaskStatus(value, "On hold");
      this.Task.push(value);

    });
  }

  Inprocess(element:any){
    this.created = this.Inprocess
    var selectedElement = this.Task.filter(i => i.id === element);
    selectedElement.forEach((value, index) => {
      this.updateTaskStatus(value, "In process");

    });

  }

  complete(element:any){
    this.created = this.completed
    this.Task.forEach((value, index) => {
      if (value.id == element) {
        // this.Task.splice(index, 1);
        this.updateTaskStatus(value, "Completed");
        this.TaskGroup.enable()
      }
    });
  }

  updateTask(id: number) {
    this.router.navigate(['/update', id])
  }

}
