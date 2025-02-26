package com.example.foodprojectbackend.Repository;

import java.util.List;

import com.example.foodprojectbackend.Entity.MenuItem;
import com.example.foodprojectbackend.Entity.Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuItemRepo extends JpaRepository<MenuItem, Integer> {

    List<MenuItem> findByRestaurant(Restaurant restaurant);

}