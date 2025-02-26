package com.example.foodprojectbackend.Entity;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String customername;
    private String password;
    private String email;
    private String address;

    public Customer() {
    }
    
    public Customer(int id, String customername, String password, String email, String address) {
        this.id = id;
        this.customername = customername;
        this.password = password;
        this.email = email;
        this.address = address;
    }

    public Customer(String customername, String password, String email, String address, List<Order> orders) {
        this.customername = customername;
        this.password = password;
        this.email = email;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomername() {
        return customername;
    }

    public void setCustomername(String customername) {
        this.customername = customername;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Customer [id=" + id + ", customername=" + customername + ", password=" + password + ", email=" + email + ", address=" + address + "]";
    }
}
