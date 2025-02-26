package com.example.foodprojectbackend.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private LocalDateTime orderDate;
    private Double totalPrice;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    @ManyToMany
    @JoinTable(
        name = "order_menu_items",
        joinColumns = @JoinColumn(name = "order_id"),
        inverseJoinColumns = @JoinColumn(name = "menu_item_id")
    )
    private List<MenuItem> orderedItems; 

    public Order() {
    }

    public Order(int id, LocalDateTime orderDate, Double totalPrice, Customer customer, Restaurant restaurant,
			List<MenuItem> orderedItems) {
		this.id = id;
		this.orderDate = orderDate;
		this.totalPrice = totalPrice;
		this.customer = customer;
		this.restaurant = restaurant;
		this.orderedItems = orderedItems;
	}

	public Order(LocalDateTime orderDate, Double totalPrice, Customer customer, Restaurant restaurant, List<MenuItem> orderedItems) {
        this.orderDate = orderDate;
        this.totalPrice = totalPrice;
        this.customer = customer;
        this.restaurant = restaurant;
        this.orderedItems = orderedItems;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public List<MenuItem> getOrderedItems() {
        return orderedItems;
    }

    public void setOrderedItems(List<MenuItem> orderedItems) {
        this.orderedItems = orderedItems;
    }

    @Override
    public String toString() {
        return "Order [id=" + id + ", orderDate=" + orderDate + ", totalPrice=" + totalPrice + ", customer=" + customer
                + ", restaurant=" + restaurant + ", orderedItems=" + orderedItems + "]";
    }
}

