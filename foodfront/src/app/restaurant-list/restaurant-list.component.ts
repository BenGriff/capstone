import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-restaurant-list',
  standalone: false,
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  isLoggedIn = false;
  
  constructor(private restaurantService: RestaurantService, private authService: AuthService) {
    this.authService.isLoggedIn.subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(
      (restaurants) => {
        this.restaurants = restaurants;
        console.log('Fetched restaurants:', restaurants);
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

  deleteRestaurant(id: number): void {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.restaurantService.deleteRestaurant(id).subscribe(
        () => {
          console.log('Restaurant deleted successfully');
          this.loadRestaurants(); 
        },
        (error) => {
          console.error('Error deleting restaurant:', error);
        }
      );
    }
  }
}
