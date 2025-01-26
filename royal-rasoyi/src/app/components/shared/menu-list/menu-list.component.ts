import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MetaService } from '../../../core/services/meta-tags.service';
import { FoodMenuService } from '../../../services/food-menu.service';

@Component({
  selector: 'app-menu-list',
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
  providers: [FoodMenuService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent implements OnInit {
  foodMenu: any[] = [];
  categories: string[] = [];
  Math = Math; 
  
  constructor(private readonly service: FoodMenuService, private readonly metaService: MetaService, private readonly cdr: ChangeDetectorRef) {

    const metaDetails = {
      title: 'Authentic Indian Homemade Dishes from Royal रसोई  | The Taste you deserve',
      description: 'Try our Royal Rajasthani Thali, Shahi Thali, Red Soup, Aloo Pyaz Sandwich, or Sabudana Khichdi today! ',
      image: 'https://royalrasoyi.com/assets/images/menu.jpg',
      url: 'https://royalrasoyi.com/menu',
      type: 'website'
    };
  
    this.metaService.updateMetaTags('Menu', metaDetails);
    
  }

  ngOnInit(): void {
    this.service.getMenuList().subscribe((data: any) => {
      this.foodMenu = data;
      this.categories = [...new Set(this.foodMenu.map((food) => food.category))];
      this.cdr.detectChanges();
    });

  }

  getFoodByCategory(category: string): any[] {
    return this.foodMenu.filter((food) => food.category === category);
  }
}
