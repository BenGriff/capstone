import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuDetailsService } from '../service/menu-details.service';
import { MenuItem } from '../model/menu-item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-menu-item',
  standalone: false,
  
  templateUrl: './edit-menu-item.component.html',
  styleUrl: './edit-menu-item.component.css'
})
export class EditMenuItemComponent implements OnInit {
  menuItem: MenuItem = {
    id: 0,
    name: '',
    price: 0,
    restaurant_id: 0
  };
  restaurantId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuDetailsService: MenuDetailsService
  ) {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('restaurantId'));
  }

  ngOnInit(): void {
    const menuItemId = Number(this.route.snapshot.paramMap.get('id'));
    if (menuItemId && this.restaurantId) {
      this.menuDetailsService.getMenuItem(menuItemId, this.restaurantId).subscribe((menuItem: MenuItem) => {
        this.menuItem = menuItem;
      });
    }
  }
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
  
    this.menuDetailsService.editMenuItem(this.menuItem).subscribe(
      () => {
        this.router.navigate(['/restaurants', this.restaurantId]);
      },
      (error) => {
        console.error('Error updating menu item:', error);
      }
    );
  }
  
  goBack() {
    if (this.restaurantId) {
      this.router.navigate(['/restaurants', this.restaurantId]);
    } else {
      alert('Restaurant ID is undefined');
    }
  }
}