import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MenuDetailsService } from '../service/menu-details.service';
import { MenuItem } from '../model/menu-item';

@Component({
  selector: 'app-add-menu-item',
  standalone: false,
  
  templateUrl: './add-menu-item.component.html',
  styleUrl: './add-menu-item.component.css'
})
export class AddMenuItemComponent implements OnInit {
  restaurantId!: number;

  constructor(
    private route: ActivatedRoute, private menuService: MenuDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('restaurantId'));
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const newItem: MenuItem = {
      name: form.value.name,
      price: form.value.price,
      restaurant_id: this.restaurantId
    };

    this.menuService.addMenuItem(newItem, this.restaurantId).subscribe(
      () => {
        this.router.navigate(['/restaurants', this.restaurantId]);
      },
      (error) => {
        console.error('Error adding menu item:', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/restaurants', this.restaurantId]);
  }
}
