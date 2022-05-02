package com.example.HeptaTaskManager.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HeptaTaskManager.Model.TaskManager;
import com.example.HeptaTaskManager.Repository.TaskManagerRepo;


@RestController
@CrossOrigin(origins = "*")
public class TaskManagerController {
	@Autowired
	public TaskManagerRepo repo;
	
	@GetMapping("getTask")
	public List<TaskManager> getTask(){
		return repo.findAll();
	}
	
	@GetMapping("getTaskById/{id}")
	public TaskManager getTaskById(@PathVariable int id){
		return repo.findById(id).orElse(null);
	}
	
	@PostMapping("addTask")
	public TaskManager addTask(@RequestBody TaskManager task) {
		return repo.save(task);
	}
	
	@DeleteMapping("deleteTask/{id}")
	public String deleteTask(@PathVariable int id) {
		repo.deleteById(id);
		return "Task Deleted";
	}
	
	@PutMapping("updateTask/{id}")
	public TaskManager updateTask(@RequestBody TaskManager task) {
		TaskManager existingTask = repo.findById(task.getId()).orElse(task);
		existingTask.setTaskname(task.getTaskname());
		existingTask.setDesc(task.getDesc());
		existingTask.setStatus(task.getStatus());
		return repo.save(existingTask);
	}
}
