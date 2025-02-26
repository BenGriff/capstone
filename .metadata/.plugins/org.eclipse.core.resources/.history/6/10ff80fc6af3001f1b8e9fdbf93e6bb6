package com.example.foodprojectbackend.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.foodprojectbackend.Entity.Order;
import com.example.foodprojectbackend.Repository.OrderRepo;

@Service
public class OrderService {

    private final OrderRepo orderRepo;

    public OrderService(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    public Optional<Order> getOrderById(int id) {
        return orderRepo.findById(id);
    }

    public Order createOrder(Order order) {
        return orderRepo.save(order);
    }

    public Optional<Order> updateOrder(int id, Order orderDetails) {
        return orderRepo.findById(id).map(order -> {
            order.setOrderDate(orderDetails.getOrderDate());
            order.setTotalPrice(orderDetails.getTotalPrice());
            order.setCustomer(orderDetails.getCustomer());
            order.setRestaurant(orderDetails.getRestaurant());
            order.setOrderedItems(orderDetails.getOrderedItems());
            return orderRepo.save(order);
        });
    }

    public boolean deleteOrder(int id) {
        if (orderRepo.existsById(id)) {
            orderRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
