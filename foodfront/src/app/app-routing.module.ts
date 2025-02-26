import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './service/auth.guard';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { EditMenuItemComponent } from './edit-menu-item/edit-menu-item.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'restaurants', component: RestaurantListComponent },
  {path:'restaurants/:id', component:RestaurantDetailsComponent},
  {path:'add-restaurant', component: AddRestaurantComponent, canActivate: [authGuard]},
  {path:'edit-restaurant/:id', component: EditRestaurantComponent, canActivate: [authGuard]},
  {path:'add-menu-item/:restaurantId', component: AddMenuItemComponent, canActivate: [authGuard]},
  {path:'edit-menu-item/:id/:restaurantId', component: EditMenuItemComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
