package com.example.foodback.services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.foodback.entity.Client;
import com.example.foodback.repo.ClientRepo;


@Service
public class ClientService {

    private final ClientRepo customerRepo;

    public ClientService(ClientRepo customerRepo) {
        this.customerRepo = customerRepo;
    }

    public List<Client> getAllCustomers() {
        return customerRepo.findAll();
    }

    public Optional<Client> getCustomerById(int id) {
        return customerRepo.findById(id);
    }

    public Client createCustomer(Client customer) {
        return customerRepo.save(customer);
    }

    public Optional<Client> updateCustomer(int id, Client customerDetails) {
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
