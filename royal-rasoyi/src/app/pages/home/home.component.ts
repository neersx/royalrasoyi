import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MetaService } from '../../core/services/meta-tags.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenuListComponent } from '../../components/shared/menu-list/menu-list.component';
import { LocationService } from '../../core/services/location.service';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, MenuListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MetaService],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  foodMenu: any[] = [];
  categories: string[] = [];
  address?: Address;
  latitude?: number;
  longitude?: number;
  locationError: string = '';

  constructor(
    private readonly metaService: MetaService,
    private readonly cdr: ChangeDetectorRef,
    private readonly locationService: LocationService
  ) {
    const metaDetails = {
      title: ' Royal रसोई  | The Taste you deserve',
      description:
        'At Royal रसोई, every dish is crafted with the love and care of a home kitchen. Whether it’s a casual lunch or a family gathering, enjoy the flavors of homemade goodness without stepping into the kitchen.',
      image: 'https://royalrasoyi.com/assets/images/thumbnail.jpg',
      url: 'https://royalrasoyi.com/',
      type: 'website',
    };

    this.metaService.updateMetaTags('Home', metaDetails);
  }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    this.locationService
      .getCurrentLocation()
      .then((coords) => {
        this.latitude = coords.latitude;
        this.longitude = coords.longitude;
           // Get Address from Google API
           this.locationService.getAddressFromCoordinates(this.latitude, this.longitude)
           .then((address: any) => {
             this.address = address;
             localStorage.setItem("address", JSON.stringify(this.address));
             console.log('Address:', this.address);
           })
           .catch((error) => {
             this.locationError = error;
           });
      })
      .catch((error) => {
        this.locationError = error.message;
      });
  }
  getFoodByCategory(category: string): any[] {
    return this.foodMenu.filter((food) => food.category === category);
  }
}
