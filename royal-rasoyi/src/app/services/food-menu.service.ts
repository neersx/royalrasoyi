/**
 * FoodMenuService in Angular 19
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {

  constructor(private readonly http: HttpClient) {}
  jsonUrl = 'https://res.cloudinary.com/royalrasoyi2025/raw/upload/v1737802589/rr_menu/food-menu.json';
  testUrl = 'https://res.cloudinary.com/royalrasoyi2025/raw/upload/v1737899156/rr_menu/test-menu.json';

  getMenuList(): Observable<any> {
    //return this.http.get(this.jsonUrl);
    return of(this.getFoodMenu());
    }

  getFoodMenu(): any {
    return [
      {
        "id": 1,
        "name": "maharaja-laddoo",
        "title": "Maharaja Laddoo",
        "bestSeason": "Winter",
        "isNonVeg": false,
        "ingredients": [
          {
            "id": 1,
            "name": "Gram Flour",
            "healthBenefits": "Rich in protein and fiber"
          },
          {
            "id": 2,
            "name": "Ghee",
            "healthBenefits": "Boosts energy and aids digestion"
          },
          {
            "id": 3,
            "name": "Gudd & Jaggery",
            "healthBenefits": "Provides quick energy"
          }
        ],
        "region": "North India",
        "images": [
          {
            "id": 1,
            "name": "Maharaja Laddoo Image",
            "url": "https://ucarecdn.com/10f12f9d-f272-448c-96e5-e2caa40572cb/maharajaladdoo.jpg"
          }
        ],
        "description": "A rich and traditional Indian sweet.",
        "category": "sweets",
        "lifeInDays": 15,
        "flavourType": "non spicy",
        "createdOn": "2025-01-01T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "SMALL",
        "price": 1200,
        "quantity": null,
        "measurement": "per Kg",
        "addons": ["Extra Ghee", "Dry Fruits"],
        "discount": 10,
        "days": "Monday",
        "type": "Dish",
        "availableToday": false,
        "ratings": 4.8,
        "foodItems": [
          {
            "id": 1,
            "name": "Laddoo",
            "quantity": null,
            "isRequired": true,
            "availableToday": false,
            "weight": "1 Kg",
            "description": "Soft and rich laddoo pieces."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Absolutely delicious!",
            "userId": 101,
            "userName": "John Doe",
            "userImage": "https://example.com/john.jpg"
          },
          {
            "id": 2,
            "comment": "Perfect for festivals.",
            "userId": 102,
            "userName": "Jane Smith",
            "userImage": "https://example.com/jane.jpg"
          }
        ]
      },
      {
        "id": 2,
        "name": "chole-poori",
        "title": "Spicy Chole Poori",
        "bestSeason": "All",
        "isNonVeg": false,
        "ingredients": [
            {
              "id": 1,
              "name": "Chickpeas",
              "healthBenefits": "High in protein and fiber"
            },
            {
              "id": 2,
              "name": "Olive Oil",
              "healthBenefits": "Rich in healthy monounsaturated fats, reduces inflammation, and supports heart health"
            },
            {
              "id": 3,
              "name": "Oats",
              "healthBenefits": "Rich in beta-glucan, lowers cholesterol, and aids digestion"
            },
            {
              "id": 4,
              "name": "Multi Grain Flour",
              "healthBenefits": "Provides a mix of essential nutrients, boosts energy, and supports digestive health"
            }
        ],
        "region": "North India",
        "images": [
          {
            "id": 1,
            "name": "Chole Poori Image",
            "url": "https://ucarecdn.com/60a6c6b4-bc56-4ac1-a40b-071490c510a4/cholepoori.jpg"
          }
        ],
        "description": "🍛 Chole: Slow-cooked with aromatic spices, tangy tomatoes, and a hint of fresh coriander for a rich and hearty flavor. 🥙 Puri: Golden, fluffy, and perfectly crispy – made fresh with the finest whole wheat flour and fried in Olive Oil.",
        "category": "breakfast",
        "lifeInDays": 1,
        "flavourType": "spicy",
        "createdOn": "2025-01-02T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "Large",
        "price": 190,
        "quantity": 5,
        "measurement": "Plate",
        "addons": ["Pickle", "Curd"],
        "discount": 10,
        "days": "Tuesday",
        "type": "Dish",
       "availableToday": true,
        "todayTime": "Breakfast",
        "ratings": 5.0,
        "foodItems": [
          {
            "id": 1,
            "name": "Chole",
            "quantity": null,
            "isRequired": true,
            "availableToday": false,
            "weight": "300ml",
            "description": "Spicy and flavorful soft chickpeas."
          },
          {
            "id": 2,
            "name": "Poori : Fried in Olive Oil",
            "quantity": 5,
            "isRequired": true,
            "availableToday": false,
            "weight": null,
            "description": "Crispy and golden prepared with Oats and Multi grain flour Poori."
          },
          {
            "id": 3,
            "name": "Freshly cut Green Salad",
            "quantity": null,
            "isRequired": true,
            "availableToday": false,
            "weight": null,
            "description": "Crispy and golden prepared with Oats and Multi grain flour Poori."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Great taste and fresh!",
            "userId": 103,
            "userName": "Alice Brown",
            "userImage": "https://example.com/alice.jpg"
          },
          {
            "id": 2,
            "comment": "Loved the spiciness.",
            "userId": 104,
            "userName": "Bob Green",
            "userImage": "https://example.com/bob.jpg"
          }
        ]
      },
      {
        "id": 3,
        "name": "royal-rajasthani-thali",
        "title": "Royal Rajasthani Thali",
        "bestSeason": "All",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Mixed grains", "healthBenefits": "Rich carbs and Balanced meal" },
          { "id": 2, "name": "Desi Ghee", "healthBenefits": "Good source of energy" },
          { "id": 3, "name": "Rayta", "healthBenefits": "Provides vitamin C and increases immunity" }
        ],
        "region": "Pan India",
        "images": [
          {
            "id": 1,
            "name": "Royal Thali Image",
            "url": "https://ucarecdn.com/72fbb4ec-f4e9-468f-a6e8-3ea0353f5864/royalrajasthanithali.jpg"
          }
        ],
        "description": "A grand and wholesome meal.",
        "category": "thali",
        "lifeInDays": 1,
        "flavourType": "non spicy",
        "createdOn": "2025-01-03T00:00:00Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00Z",
        "type": "Dish",
       "availableToday": true,
        "size": "MEDIUM",
        "price": 450,
        "quantity": 1,
        "measurement": "Plate",
        "addons": ["Extra Curry", "Dessert"],
        "discount": 10,
        "days": "Wednesday",
        "ratings": 4.9,
        "foodItems": [
          {
            "id": 1,
            "name": "Arahar Daal Tadka",
            "quantity": null,
            "weight": "200ml",
            "isRequired": true,
            "availableToday": false,
            "description": "Yummy Daal"
          },
          {
            "id": 2,
            "name": "Veg or Boondi Rayta",
            "quantity": null,
            "weight": "180ml",
            "isRequired": true,
            "availableToday": false,
            "description": "Light and flavorful arahar/channa daal"
          },
          {
            "id": 3,
            "name": "Baigan Ka Bharta",
            "quantity": null,
            "weight": "200g",
            "isRequired": false,
            "availableToday": false,
            "description": "Steamed basmati rice."
          },
          {
            "id": 4,
            "name": "Desi Ghee Dipped Baati",
            "quantity": 5,
            "weight": null,
            "isRequired": true,
            "availableToday": false,
            "description": "Rounded crunchy baati, dipped in Ghee."
          },
          {
            "id": 5,
            "name": "Rajasthani Choorma",
            "quantity": 4,
            "weight": "100gm",
            "isRequired": true,
            "availableToday": false,
            "description": "Rounded crunchy baati, dipped in Ghee."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Perfect for a full meal!",
            "userId": 105,
            "userName": "Charlie Black",
            "userImage": "https://example.com/charlie.jpg"
          },
          {
            "id": 2,
            "comment": "So many delicious dishes.",
            "userId": 106,
            "userName": "Diana White",
            "userImage": "https://example.com/diana.jpg"
          }
        ]
      }
    ];
  }
  
}
