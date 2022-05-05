package com.example.HeptaTaskManager.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HeptaTaskManager.Model.UserRegister;
import com.example.HeptaTaskManager.Repository.UserRegisterRepo;

@Service
public class UserRegisterService {
	@Autowired
	public UserRegisterRepo repo;
	
//	Get all the users
	public List<UserRegister> getAllUsers() {	
		List<UserRegister> users = null;
		try {
			users = repo.findAll();
			if(users.isEmpty()) {
				System.out.println("User not found in user repo");
				return new ArrayList<>();
			}
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return users;
	}
	
//	Get the user by id
	public UserRegister getUser(String userId) {	
		Optional<UserRegister> user = null;
		try {
			user = repo.findById(userId);
			if(user.isEmpty()) {
				System.out.println("User not found in user repo");
			}	
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return user.get();
	}
	
//	Save the user
	public String saveUser(UserRegister user) {
		
		UserRegister convertedUser = new UserRegister(
				user.getEmail(),
				user.getName(),
				user.getPassword()
		);
		
		try {
			System.out.println(convertedUser);
			repo.save(convertedUser);
			return "success";
		} catch(Exception e) {
			System.out.println("Error\n" + e.getMessage());
		}
		return "failure";
	}
	
//	delete the user
	public String deleteUser(UserRegister user) {
		try {
			repo.delete(user);
			return "success";
		} catch(Exception e) {
			System.out.println("Error\n" + e.getMessage());
		}
		return "failure";
	}
	
	
//	Delete the user by id
	public String deleteUserById(String userId) {
		try {
			repo.deleteById(userId);
			return "success";
		} catch(Exception e) {
			System.out.println("Error\n" + e.getMessage());
		}
		return "failure";
	}
//	Update the user
	public String updateUser(UserRegister user) {
		try {
			repo.save(user);
			return "success";
		} catch(Exception e) {
			System.out.println("Error\n" + e.getMessage());
		}
		return "failure";
	}
}
