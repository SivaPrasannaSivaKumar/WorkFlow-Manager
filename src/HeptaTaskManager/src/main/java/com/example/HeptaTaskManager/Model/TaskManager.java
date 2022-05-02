package com.example.HeptaTaskManager.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "TaskManager")
public class TaskManager {		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "taskname", nullable = false, length = 20)
	private String taskname;
	@Column(name = "desc", nullable = false, length = 20)
	private String desc;
	@Column(name = "status", nullable = false, length = 20)
	private String status;
	
	public TaskManager() {
		super();
		// TODO Auto-generated constructor stub
	}
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
