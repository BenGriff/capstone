package com.example.foodback.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.foodback.entity.Menu;
import com.example.foodback.entity.Restaurant;

public interface MenuRepo extends JpaRepository<Menu, Integer> {

    List<Menu> findByRestaurant(Restaurant restaurant);

}