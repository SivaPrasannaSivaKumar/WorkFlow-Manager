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
@Table(name = "UserRegister")
public class UserRegister {
	@Id
	@Column(name = "EMAIL",nullable = true,length = 25)
	private String email;
	@Column(name = "NAME",nullable = false,length = 25)
	private String name;
	@Column(name = "PASSWORD",nullable = false,length = 25)
	private String password;
	public UserRegister() {
		super();
	}
	public UserRegister(String email, String name, String password) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserRegister [email=" + email + ", name=" + name + ", password=" + password 
				+ ", getEmail()=" + getEmail() + ", getName()=" + getName() + ", getPassword()=" + getPassword()
				+  "]";
	}
}
