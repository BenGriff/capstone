import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { RestaurantService } from '../service/restaurant.service';
import { MenuDetailsService } from '../service/menu-details.service';
import { Restaurant } from '../model/restaurant';
import { MenuItem } from '../model/menu-item';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-restaurant-details',
  standalone: false,
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantId: string | null = null;
  restaurant: Restaurant | null = null;
  menuItems: MenuItem[] = [];
  isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService,
    private menuDetailsService: MenuDetailsService,
    private authService: AuthService
  ) {
    this.authService.isLoggedIn.subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    
    if (this.restaurantId) {
      this.restaurantService.getRestaurantById(Number(this.restaurantId)).subscribe((data) => {
        this.restaurant = data;
      });

      this.menuDetailsService.getMenuItemsByRestaurantId(Number(this.restaurantId)).subscribe((data) => {
        this.menuItems = data;
      });
    }
  }
  
  deleteMenuItem(menuItemId: number | undefined): void {
    if (menuItemId !== undefined) {
      this.menuDetailsService.deleteMenuItem(menuItemId).subscribe(() => {
        this.menuItems = this.menuItems.filter(item => item.id !== menuItemId);
      });
    }
  }

  goBack() {
    this.router.navigate(['/restaurants']);
  }
}