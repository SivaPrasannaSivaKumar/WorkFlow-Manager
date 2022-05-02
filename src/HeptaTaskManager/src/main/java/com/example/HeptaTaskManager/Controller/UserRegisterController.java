package com.example.HeptaTaskManager.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HeptaTaskManager.Model.UserRegister;
import com.example.HeptaTaskManager.Repository.UserRegisterRepo;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders="*")
@RestController
public class UserRegisterController {
	@Autowired
	public UserRegisterRepo repo;

	@PostMapping("addUser")
	public UserRegister addUser(@RequestBody UserRegister user) {
		return repo.save(user);
	}
	
	@GetMapping("getUser")
	public List<UserRegister> getUser(){
		return repo.findAll();
	}
	
	@GetMapping("getUserById/{id}")
	public UserRegister getUserById(@PathVariable int id){
		return repo.findById(id).orElse(null);
	}
	
	@DeleteMapping("deleteUser/{id}")
	public String deleteUser(@PathVariable int id) {
		repo.deleteById(id);
		return "User Deleted Successfully!";
	}
}
