package com.example.HeptaTaskManager.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HeptaTaskManager.Model.UserRegister;
import com.example.HeptaTaskManager.Service.UserRegisterService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders="*")
@RestController
public class UserRegisterController {
	@Autowired
	public UserRegisterService serv;

	@PostMapping("signup")
	public boolean saveUser(@RequestBody UserRegister user) {
		System.out.println(user);
		return serv.saveUser(user).equals("success") ? true : false;
	}
}
