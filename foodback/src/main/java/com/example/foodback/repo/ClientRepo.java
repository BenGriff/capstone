package com.example.foodback.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.foodback.entity.Client;

public interface ClientRepo extends JpaRepository<Client, Integer> {

}
