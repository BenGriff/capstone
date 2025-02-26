package com.example.foodprojectbackend.Services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.foodprojectbackend.Entity.Customer;
import com.example.foodprojectbackend.Repository.CustomerRepo;


@Service
public class CustomerService {

    private final CustomerRepo customerRepo;

    public CustomerService(CustomerRepo customerRepo) {
        this.customerRepo = customerRepo;
    }

    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    public Optional<Customer> getCustomerById(int id) {
        return customerRepo.findById(id);
    }

    public Customer createCustomer(Customer customer) {
        return customerRepo.save(customer);
    }

    public Optional<Customer> updateCustomer(int id, Customer customerDetails) {
        return customerRepo.findById(id).map(customer -> {
            customer.setCustomername(customerDetails.getCustomername());
            customer.setPassword(customerDetails.getPassword());
            customer.setEmail(customerDetails.getEmail());
            return customerRepo.save(customer);
        });
    }

    public boolean deleteCustomer(int id) {
        if (customerRepo.existsById(id)) {
        	customerRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
