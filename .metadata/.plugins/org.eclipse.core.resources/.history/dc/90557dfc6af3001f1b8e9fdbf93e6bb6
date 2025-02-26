package com.example.foodprojectbackend.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.foodprojectbackend.Entity.MenuItem;
import com.example.foodprojectbackend.Entity.Restaurant;
import com.example.foodprojectbackend.Repository.MenuItemRepo;

@Service
public class MenuItemService {

    private final MenuItemRepo menuItemRepo;

    public MenuItemService(MenuItemRepo menuItemRepo) {
        this.menuItemRepo = menuItemRepo;
    }

    public List<MenuItem> getAllMenuItems() {
        return menuItemRepo.findAll();
    }

    public Optional<MenuItem> getMenuItemById(int id) {
        return menuItemRepo.findById(id);
    }

    public List<MenuItem> getMenuItemsByRestaurant(Restaurant restaurant) {
        return menuItemRepo.findByRestaurant(restaurant);
    }

    public MenuItem createMenuItem(MenuItem menuItem) {
        return menuItemRepo.save(menuItem);
    }

    public Optional<MenuItem> updateMenuItem(int id, MenuItem menuItemDetails) {
        return menuItemRepo.findById(id).map(menuItem -> {
            menuItem.setName(menuItemDetails.getName());
            menuItem.setPrice(menuItemDetails.getPrice());
            return menuItemRepo.save(menuItem);
        });
    }

    public boolean deleteMenuItem(int id) {
        if (menuItemRepo.existsById(id)) {
            menuItemRepo.deleteById(id);
            return true;
        }
        return false;
    }
}