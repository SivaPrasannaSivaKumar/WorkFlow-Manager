package com.example.HeptaTaskManager.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HeptaTaskManager.Model.UserRegister;
import com.example.HeptaTaskManager.Repository.UserRegisterRepo;
import com.example.HeptaTaskManager.Service.UserRegisterService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders="*")
@RestController
public class UserRegisterController {
	@Autowired
	public UserRegisterService serv;
	@Autowired
	public UserRegisterRepo repo;

	@PostMapping("signup")
	public boolean saveUser(@RequestBody UserRegister user) {
		System.out.println(user);
		return serv.saveUser(user).equals("success") ? true : false;
	}
	
	@GetMapping("getUser")
	public List<UserRegister> getUser() {
		return repo.findAll();
	}
}
