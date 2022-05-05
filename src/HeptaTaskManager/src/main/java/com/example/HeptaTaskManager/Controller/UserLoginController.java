package com.example.HeptaTaskManager.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HeptaTaskManager.Model.UserLogin;
import com.example.HeptaTaskManager.Model.UserRegister;
import com.example.HeptaTaskManager.Repository.UserRegisterRepo;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders="*")
@RestController
public class UserLoginController {
	@Autowired
	public UserRegisterRepo repo;
	
	@PostMapping("login")
	public boolean checkUser(@RequestBody UserLogin data) {
		System.out.println(data);
		Optional<UserRegister> user = repo.findById(data.getEmail());
		if(user.isEmpty()) {
			System.out.println("false");
			return false;
		}else {
			if(user.get().getPassword().equals(data.getPassword())) {
				System.out.println("true");
				return true;				
			}else {
				System.out.println("false");
				return false;
			}
		}
	}
}
