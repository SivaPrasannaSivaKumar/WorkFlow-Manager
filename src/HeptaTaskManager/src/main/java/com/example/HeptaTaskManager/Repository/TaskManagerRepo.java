package com.example.HeptaTaskManager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HeptaTaskManager.Model.TaskManager;

@Repository
public interface TaskManagerRepo extends JpaRepository<TaskManager, Integer>{

}
