import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant';

@Component({
  selector: 'app-edit-restaurant',
  standalone: false,
  
  templateUrl: './edit-restaurant.component.html',
  styleUrl: './edit-restaurant.component.css'
})
export class EditRestaurantComponent implements OnInit {
  restaurant: Restaurant | undefined;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.restaurantService.getRestaurantById(id).subscribe(
      (restaurant) => {
        this.restaurant = restaurant;
      },
      (error) => {
        console.error('Error fetching restaurant:', error);
      }
    );
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.restaurant) {
      this.restaurantService.editRestaurant(this.restaurant).subscribe(
        () => {
          console.log('Restaurant updated successfully');
          this.router.navigate(['/restaurants']);
        },
        (error) => {
          console.error('Error updating restaurant:', error);
        }
      );
    } else {
      console.log('Form is invalid or restaurant is undefined');
    }
  }

  goBack(): void {
    this.router.navigate(['/restaurants']);
  }
}