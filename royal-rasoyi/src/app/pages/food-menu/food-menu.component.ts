import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MetaService } from '../../core/services/meta-tags.service';
import { MenuListComponent } from "../../components/shared/menu-list/menu-list.component";

@Component({
  selector: 'app-food-menu',
  imports: [CommonModule, RouterModule, MenuListComponent],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodMenuComponent implements OnInit {
  foodMenu: any[] = [];
  categories: string[] = [];

  private readonly router = inject(Router);
  
  constructor( private readonly metaService: MetaService, private readonly cdr: ChangeDetectorRef) {
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
    this.cdr.detectChanges();
  }

  getFoodByCategory(category: string): any[] {
    return this.foodMenu.filter((food) => food.category === category);
  }

  goToFoodDetails(name: any) {
    this.router.navigate(['food-details', name]);

  }
}
