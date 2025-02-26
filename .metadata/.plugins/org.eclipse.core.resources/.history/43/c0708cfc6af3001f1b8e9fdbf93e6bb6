package com.example.foodprojectbackend.Entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "restaurants")
@JsonIgnoreProperties({"menu"})
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String location;
    private Double rating;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MenuItem> menu = new ArrayList<>();

    public Restaurant() {
    }

    public Restaurant(int id, String name, String location, Double rating, List<MenuItem> menu) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.rating = rating;
        this.menu = menu;
    }

    public Restaurant(String name, String location, Double rating, List<MenuItem> menu, List<Order> orders) {
        this.name = name;
        this.location = location;
        this.rating = rating;
        this.menu = menu;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public List<MenuItem> getMenu() {
        return menu;
    }

    public void setMenu(List<MenuItem> menu) {
        this.menu.clear();
        if (menu != null) {
            for (MenuItem menuItem : menu) {
                addMenuItem(menuItem);
            }
        }
    }

    public void addMenuItem(MenuItem menuItem) {
        menu.add(menuItem);
        menuItem.setRestaurant(this);
    }

    public void removeMenuItem(MenuItem menuItem) {
        menu.remove(menuItem);
        menuItem.setRestaurant(null);
    }

    @Override
    public String toString() {
        return "Restaurant [id=" + id + ", name=" + name + ", location=" + location + ", rating=" + rating + ", menu="
                + menu + "]";
    }
}