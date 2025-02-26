package com.example.foodback.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.foodback.entity.Order;

public interface OrderRepo extends JpaRepository<Order, Integer> {
}