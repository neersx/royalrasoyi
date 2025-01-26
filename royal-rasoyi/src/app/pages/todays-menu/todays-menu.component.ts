import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router } from 'express';
import { MetaService } from '../../core/services/meta-tags.service';
import { FoodMenuService } from '../../services/food-menu.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todays-menu',
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './todays-menu.component.html',
  styleUrl: './todays-menu.component.scss',
  standalone: true,
  providers: [FoodMenuService],
})
export class TodaysMenuComponent  implements OnInit {
  foodMenu: any[] = [];
  categories: string[] = [];

  private readonly router = inject(Router);
  
  constructor(private readonly service: FoodMenuService, private readonly metaService: MetaService, private readonly cdr: ChangeDetectorRef) {
    const metaDetails = {
      title: 'Authentic Indian Homemade Dishes from Royal रसोई  | The Taste you deserve',
      description: 'Try our Maharaj Thali Shahi Thali, Aloo Pyaz Sandwich, or Sabudana Khichdi today! ',
      image: 'https://royalrasoyi.com/assets/images/menu.jpg',
      url: 'https://royalrasoyi.com/menu',
      type: 'website'
    };
  
    this.metaService.updateMetaTags('Menu', metaDetails);
  }

  ngOnInit(): void {
    // this.service.getMenuList().subscribe((data: any) => {
    //   this.foodMenu = data;
    //   console.log(this.foodMenu);
    // });
    this.categories = [...new Set(this.foodMenu.map((food) => food.category))];
    this.cdr.detectChanges();
  }

  getFoodByCategory(category: string): any[] {
    return this.foodMenu.filter((food) => food.category === category);
  }

}
