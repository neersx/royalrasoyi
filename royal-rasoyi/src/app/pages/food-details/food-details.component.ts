import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, inject, PLATFORM_ID, REQUEST } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodMenuService } from '../../services/food-menu.service';
import { MetaService } from '../../core/services/meta-tags.service';
import { MEASUREMENT_UNIT } from '../../core/constants/food-measurement.constants';
import { MeasurementUnitService } from '../../core/services/measurement-unit.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-food-details',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodDetailsComponent {
  foodName: string | null = '';
  foodMenuList = [];
  foodDetails : any;
  isBrowser = true;
  Math = Math; 

  selectedSize = 'Medium';
  selectedPrice : {size:string, quantity: number, price: number} = {size: 'Medium', quantity: 0, price: 0};
  selectedQuantity = 1;
  totalAmount = 0;
  isAddedToCart = false;

  measurementUnit = MEASUREMENT_UNIT; // Assign constant to a variable for template access

  constructor(
    private readonly metaService: MetaService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly service: FoodMenuService,
    private readonly cartService: CartService,
    private readonly cdr: ChangeDetectorRef,
    private readonly measurementUnitService: MeasurementUnitService,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    // Check if the platform is browser
    this.isBrowser = isPlatformBrowser(platformId);

    const request = inject(REQUEST);
    console.log('<<< request  >>>', request?.url);
  }

  ngOnInit(): void {
    this.foodName = this.route.snapshot.paramMap.get('name'); 
    this.service.getMenuList().subscribe((data: any) => {    
      this.foodMenuList = data;
      this.foodDetails = this.foodMenuList.filter((f: any) => f.name === this.foodName)[0];
      if(!this.foodDetails) return;
      

      this.selectedSize = this.foodDetails.defaultSize; // Initialize with default size
        this.selectedPrice = this.foodDetails.prices.find((item: any) => item.size === this.foodDetails.defaultSize);
        this.totalAmount = this.selectedPrice.price;
        this.getMeasurementLabel(this.selectedPrice.quantity);
     
     
      this.selectedQuantity = 1;

      this.updateMetaTags(this.foodDetails);
      this.foodDetails.relatedItems = this.getRelatedFoods(this.foodDetails?.id);
    
      this.cdr.detectChanges();
    });
   
  }

  // Function to update price based on selected size
  updatePrice(size: string) {
    const selectedItem = this.foodDetails.prices.find((item: any) => item.size === size);
    if (selectedItem) {
      this.selectedPrice = selectedItem;
      this.getMeasurementLabel(selectedItem.quantity);
      this.isAddedToCart = this.isAddedToCart ? false : this.isAddedToCart;
    }
    this.calculateTotalPrice();
  }

  // Function to calculate total price based on selected quantity
  calculateTotalPrice() {
    const selectedItem = this.foodDetails.prices.find((item: any) => item.size === this.selectedSize);
    if (selectedItem) {
      this.totalAmount = selectedItem.price * this.selectedQuantity;
      this.getMeasurementLabel(selectedItem.quantity);
    }
  }


  addToCart() {
    const foodItem = { id: this.foodDetails.id, image: this.foodDetails.images[0], name: this.foodDetails.title, quantity: this.selectedQuantity, price: this.totalAmount }; // Example item
    this.cartService.addToCart(foodItem);
    this.isAddedToCart = true;
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  // Function to increment quantity
  incrementQuantity() {
    this.selectedQuantity++;
    this.calculateTotalPrice();
  }

  // Function to decrement quantity (minimum 1)
  decrementQuantity() {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
      this.calculateTotalPrice();
    }
  }

  getMeasurementLabel(quantity: number = 0): string {

    return this.measurementUnitService.getMeasurementLabel(this.foodDetails.measurement, this.selectedPrice.quantity);
  }


   getRelatedFoods(foodId: number): Array<{ id: number; name: string; image: string; description: string }> {
    const currentFood: any = this.foodMenuList.find((food: any) => food.id === foodId);

    if (!currentFood) {
      return []; // Return an empty array if the food item is not found
    }

    const relatedFoods = this.foodMenuList
      .filter((food: any) => food.category === currentFood.category && food.id !== foodId)
      .map((food: any) => ({
        id: food.id,
        title: food.title,
        name: food.name,
        image: food.images[0],
        description: food.description,
      }));

    return relatedFoods;
  }

  updateMetaTags(product: any) {

    let productPageUrl = '';

    // Generate the product page URL only in the browser
    // if (window && window?.location) {
    //   productPageUrl = `${window.location?.origin}${this.router.url}`;
    // }
    const metaDetails = {
      title: product.title,
      description: product.description,
      image: product.images[0].url,
      url: productPageUrl
    };

    this.metaService.updateMetaTags(product.title, metaDetails);
    this.cdr.detectChanges();
  }

  getFullStars(rating: number): number[] {
    const fullStars = Math.floor(rating); // Get the integer part of the rating
    return Array(fullStars).fill(0); // Create an array with `fullStars` elements
  }
  
  getEmptyStars(rating: number): number[] {
    const emptyStars = 5 - Math.floor(rating); // Calculate remaining stars
    return Array(emptyStars).fill(0); // Create an array with `emptyStars` elements
  }

  goToFoodDetails(name: any) {
    this.router.navigate(['food-details', name]);
    this.cdr.detectChanges();
  }

}
