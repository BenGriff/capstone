package com.example.foodback.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.foodback.entity.Restaurant;

public interface RestaurantRepo extends JpaRepository<Restaurant, Integer> {

}
