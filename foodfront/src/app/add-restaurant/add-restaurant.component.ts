import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-add-restaurant',
  standalone: false,
  
  templateUrl: './add-restaurant.component.html',
  styleUrl: './add-restaurant.component.css'
})
export class AddRestaurantComponent {

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const newRestaurant: Restaurant = form.value;
      this.restaurantService.createRestaurant(newRestaurant).subscribe(
        () => {
          console.log('Restaurant added successfully');
          this.router.navigate(['/restaurants']);
        },
        (error) => {
          console.error('Error adding restaurant:', error);
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/restaurants']);
  }
}