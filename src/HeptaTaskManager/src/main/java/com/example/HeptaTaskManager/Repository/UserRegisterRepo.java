package com.example.HeptaTaskManager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HeptaTaskManager.Model.UserRegister;

@Repository
public interface UserRegisterRepo extends JpaRepository<UserRegister, String> {

}
