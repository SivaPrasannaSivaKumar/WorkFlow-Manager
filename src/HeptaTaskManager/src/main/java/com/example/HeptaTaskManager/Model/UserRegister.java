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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "username", nullable = false, length = 20)
	private String username;
	@Column(name = "useremail", nullable = false, length = 30)
	private String useremail;
	@Column(name = "userpassword", nullable = false, length = 20)
	private String userpassword;
	public UserRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserRegister(int id, String username, String useremail, String userpassword) {
		super();
		this.id = id;
		this.username = username;
		this.useremail = useremail;
		this.userpassword = userpassword;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUseremail() {
		return useremail;
	}
	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	public String getUserpassword() {
		return userpassword;
	}
	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
}
