import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  constructor(private readonly service: FoodMenuService, private readonly cdr: ChangeDetectorRef) {
    
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
