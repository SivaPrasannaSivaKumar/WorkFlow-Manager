package com.example.HeptaTaskManager.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TASKMANAGER")
public class TaskManager {
	@Id
	private int id;
	private String taskname, desc, status;
	public TaskManager(int id, String taskname, String desc, String status) {
		super();
		this.id = id;
		this.taskname = taskname;
		this.desc = desc;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTaskname() {
		return taskname;
	}
	public void setTaskname(String taskname) {
		this.taskname = taskname;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
