package com.example.foodback.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.foodback.entity.Menu;
import com.example.foodback.entity.Restaurant;
import com.example.foodback.repo.MenuRepo;

@Service
public class MenuService {

    private final MenuRepo menuItemRepo;

    public MenuService(MenuRepo menuItemRepo) {
        this.menuItemRepo = menuItemRepo;
    }

    public List<Menu> getAllMenuItems() {
        return menuItemRepo.findAll();
    }

    public Optional<Menu> getMenuItemById(int id) {
        return menuItemRepo.findById(id);
    }

    public List<Menu> getMenuItemsByRestaurant(Restaurant restaurant) {
        return menuItemRepo.findByRestaurant(restaurant);
    }

    public Menu createMenuItem(Menu menuItem) {
        return menuItemRepo.save(menuItem);
    }

    public Optional<Menu> updateMenuItem(int id, Menu menuItemDetails) {
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