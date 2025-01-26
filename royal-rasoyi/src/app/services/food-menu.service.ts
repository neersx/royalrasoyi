/**
 * FoodMenuService in Angular 19
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodMenuService {

  constructor(private readonly http: HttpClient) {}
  jsonUrl = 'https://res.cloudinary.com/royalrasoyi2025/raw/upload/v1737802589/rr_menu/food-menu.json';
  testUrl = 'https://res.cloudinary.com/royalrasoyi2025/raw/upload/v1737899156/rr_menu/test-menu.json';

  getMenuList(): Observable<any> {
    return this.http.get(this.jsonUrl);
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
      },
      {
        "id": 4,
        "name": "veg-appe",
        "title": "Crispy Veg Appe",
        "bestSeason": "All",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Rice Flour", "healthBenefits": "Easy to digest" },
          { "id": 2, "name": "Vegetables", "healthBenefits": "Rich in vitamins" },
          { "id": 3, "name": "Spices", "healthBenefits": "Enhances taste and digestion" }
        ],
        "region": "South India",
        "images": [
          {
            "id": 1,
            "name": "Veg Appe Image",
            "url": "https://ucarecdn.com/1e25a2ea-fd56-4c37-92ab-b3a403757abc/vegappe.jpg"
          }
        ],
        "description": "A healthy and tasty snack.",
        "category": "breakfast",
        "lifeInDays": 2,
        "flavourType": "spicy",
        "createdOn": "2025-01-04T00:00:00Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00Z",
        "size": "SMALL",
        "price": 150,
        "quantity": 12,
        "measurement": "Plate",
        "addons": ["Coconut Chutney", "Sambar"],
        "discount": 10,
        "days": "Thursday",
        "type": "Dish",
        "availableToday": false,
        "ratings": 4.6,
        "foodItems": [
          {
            "id": 1,
            "name": "Appe Pieces",
            "quantity": 12,
            "weight": null,
            "description": "Crispy and healthy snack."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Perfect snack!",
            "userId": 107,
            "userName": "Eve Blue",
            "userImage": "https://example.com/eve.jpg"
          },
          {
            "id": 2,
            "comment": "Loved the chutney.",
            "userId": 108,
            "userName": "Frank Red",
            "userImage": "https://example.com/frank.jpg"
          }
        ]
      },
      {
        "id": 5,
        "name": "shahi-laddoo",
        "title": "Royal Shahi Laddoo",
        "bestSeason": "Winter",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Almonds", "healthBenefits": "Rich in healthy fats" },
          { "id": 2, "name": "Milk", "healthBenefits": "Good source of calcium" },
          { "id": 3, "name": "Honey", "healthBenefits": "Natural sweetener" }
        ],
        "region": "North India",
        "images": [
          {
            "id": 1,
            "name": "Shahi Laddoo Image",
            "url": "https://ucarecdn.com/652c4869-4145-467b-bdbe-19d7e8f99f52/shahiladdoo.jpg"
          }
        ],
        "description": "A luxurious and healthy sweet.",
        "category": "sweets",
        "lifeInDays": 10,
        "flavourType": "non spicy",
        "createdOn": "2025-01-04T00:00:00Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00Z",
        "size": "LARGE",
        "price": 1500,
        "quantity": 1,
        "measurement": "per Kg",
        "addons": ["Extra Honey", "Dry Fruits"],
        "type": "Dish",
        "availableToday": false,
        "discount": 15,
        "days": "Friday",
        "ratings": 4.6,
        "foodItems": [
          {
            "id": 1,
            "name": "Shahi Laddoo",
            "quantity": null,
            "weight": "1 Kg",
            "description": "Crispy and healthy snack."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Perfect snack!",
            "userId": 107,
            "userName": "Eve Blue",
            "userImage": "https://example.com/eve.jpg"
          },
          {
            "id": 2,
            "comment": "Loved the chutney.",
            "userId": 108,
            "userName": "Frank Red",
            "userImage": "https://example.com/frank.jpg"
          }
        ]
      },
      {
        "id": 6,
        "name": "veg-sandwich",
        "title": "Crispy Sandwich",
        "bestSeason": "All",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Rice Flour", "healthBenefits": "Easy to digest" },
          { "id": 2, "name": "Vegetables", "healthBenefits": "Rich in vitamins" },
          { "id": 3, "name": "Spices", "healthBenefits": "Enhances taste and digestion" }
        ],
        "region": "Global",
        "images": [
          {
            "id": 1,
            "name": "Veg Sandwich Image",
            "url": "https://ucarecdn.com/219dfed1-3fe4-4498-9ef2-e3ddfffdf44f/vegsandwich.jpg"
          }
        ],
        "description": "A healthy and tasty snack.",
        "category": "breakfast",
        "lifeInDays": 2,
        "flavourType": "spicy",
        "createdOn": "2025-01-04T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "MEDIUM",
        "price": 160,
        "quantity": 4,
        "measurement": "Plate",
        "addons": ["Chutney"],
        "discount": 5,
        "days": "Thursday",
        "type": "Dish",
        "availableToday": false,
        "todayTime": "Breakfast",
        "ratings": 4.6,
        "foodItems": [
          {
            "id": 1,
            "name": "Grilled Bread Pieces",
            "quantity": 4,
            "weight": null,
            "description": "Crispy and healthy snack."
          },
          {
            "id": 2,
            "name": "Tomato Ketchup Sachet",
            "quantity": 2,
            "weight": null,
            "description": "Crispy and healthy snack."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Perfect snack!",
            "userId": 107,
            "userName": "Eve Blue",
            "userImage": "https://example.com/eve.jpg"
          },
          {
            "id": 2,
            "comment": "Loved the chutney.",
            "userId": 108,
            "userName": "Frank Red",
            "userImage": "https://example.com/frank.jpg"
          }
        ]
      },
      {
        "id": 7,
        "name": "aloo-pyaj-paratha",
        "title": "Aloo Pyaj Paratha",
        "bestSeason": "All",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Aloo (Potato)", "healthBenefits": "Rich in carbohydrates for energy" },
          { "id": 2, "name": "Pyaj (Onion)", "healthBenefits": "Good source of antioxidants and fiber" },
          { "id": 3, "name": "Whole Wheat Flour", "healthBenefits": "Rich in fiber for digestion" }
        ],
        "region": "North India",
        "images": [
          {
            "id": 1,
            "name": "Aloo Pyaaj Paratha",
            "url": "https://ucarecdn.com/47e824fa-cb5a-4a5c-bc26-577de5d2fd9b/aloopyajparatha.jpg"
          }
        ],
        "description": "Traditional North Indian delight made with love and fresh ingredients, perfect for breakfast or evening snacks.",
        "category": "breakfast",
        "lifeInDays": 1,
        "flavourType": "mild spicy",
        "createdOn": "2025-01-05T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "LARGE",
        "price": 129,
        "quantity": 2,
        "measurement": "Per Plate",
        "addons": ["Red Sweet Chutney", "Green Spicy Chutney"],
        "discount": 0,
        "type": "Dish",
        "availableToday": false,
        "days": "All Days",
        "ratings": 4.5,
        "foodItems": [
          {
            "id": 1,
            "name": "Paratha",
            "quantity": 2,
            "weight": "200g",
            "description": "Soft, flaky parathas with a savory potato and onion filling."
          }
        ],
        "comments": []
      },
      {
        "id": 8,
        "name": "pao-bhaaji",
        "title": "Pao Bhaaji",
        "bestSeason": "All",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Potatoes", "healthBenefits": "Rich in carbohydrates" },
          { "id": 2, "name": "Tomatoes", "healthBenefits": "High in Vitamin C" },
          { "id": 3, "name": "Spices", "healthBenefits": "Boosts metabolism" }
        ],
        "region": "West India",
        "images": [
          {
            "id": 2,
            "name": "Pao Bhaaji Image",
            "url": "https://ucarecdn.com/3fc61ce7-d5bb-4517-a20e-c72f3b260b85/paobhaaji.jpg"
          }
        ],
        "description": "A spicy and flavorful street food dish.",
        "category": "snacks",
        "lifeInDays": 1,
        "flavourType": "spicy",
        "createdOn": "2025-01-01T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "LARGE",
        "price": 245,
        "quantity": null,
        "measurement": "per plate",
        "addons": ["Extra Butter", "Pav"],
        "discount": 10,
        "days": "Tuesday",
        "type": "Dish",
        "availableToday": false,
        "ratings": 4.7,
        "foodItems": [
          {
            "id": 2,
            "name": "Pao Bhaaji Plate",
            "quantity": null,
            "isRequired": true,
            "availableToday": false,
            "weight": "250 g",
            "description": "Spicy Bhaaji served with buttery Pao."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Loved the buttery pao!",
            "userId": 103,
            "userName": "Ravi Kumar",
            "userImage": "https://example.com/ravi.jpg"
          }
        ]
      },
      {
        "id": 9,
        "name": "matar-mashroom-meal",
        "title": "Matar Mushroom Meal",
        "bestSeason": "Winter",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Mushrooms", "healthBenefits": "Rich in protein" },
          { "id": 2, "name": "Green Peas", "healthBenefits": "High in fiber" },
          { "id": 3, "name": "Rice", "healthBenefits": "Good source of carbohydrates" }
        ],
        "region": "North India",
        "images": [
          {
            "id": 5,
            "name": "Matar Mushroom Meal Image",
            "url": "https://ucarecdn.com/b3d6c8a2-1ccf-48c6-b618-dcf8fe3163a9/matarmushroommeal.jpg"
          }
        ],
        "description": "A hearty meal with mushrooms and peas in a creamy curry.",
        "category": "thali",
        "lifeInDays": 1,
        "flavourType": "spicy",
        "createdOn": "2025-01-01T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "LARGE",
        "price": 260,
        "quantity": null,
        "measurement": "per meal",
        "addons": ["Raita", "Papad"],
        "discount": 5,
        "days": "Friday",
        "type": "Dish",
        "availableToday": false,
        "ratings": 4.6,
        "foodItems": [
          {
            "id": 5,
            "name": "Matar Mushroom Curry with Rice",
            "quantity": null,
            "isRequired": true,
            "availableToday": false,
            "weight": "200 g",
            "description": "Flavorful curry served with steamed rice."
          },
          {
            "id": 6,
            "name": "Multi Grain Tawa Roti",
            "quantity": 5,
            "isRequired": true,
            "availableToday": false,
            "weight": null,
            "description": "Flavorful curry served with steamed rice."
          },
          {
            "id": 7,
            "name": "Freshly cut Salad",
            "quantity": 1,
            "isRequired": true,
            "availableToday": false,
            "weight": null,
            "description": "Flavorful salad"
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Delicious and filling!",
            "userId": 106,
            "userName": "Priya Singh",
            "userImage": "https://example.com/priya.jpg"
          }
        ]
      },
      {
        "id": 10,
        "name": "shahi-thali",
        "title": "Shahi Thali",
        "bestSeason": "All Seasons",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Paneer", "healthBenefits": "Rich in protein and calcium" },
          { "id": 2, "name": "Multi Grain Flour", "healthBenefits": "High in fiber" },
          { "id": 3, "name": "Arahar Daal", "healthBenefits": "Good source of iron and protein" },
          { "id": 4, "name": "Desi Ghee", "healthBenefits": "Provides essential fats" },
          { "id": 5, "name": "Olive Oil", "healthBenefits": "Rich in antioxidants" },
          { "id": 6, "name": "Spices", "healthBenefits": "Boosts metabolism" }
        ],
        "region": "North India",
        "images": [
          {
            "id": 6,
            "name": "Shahi Thali Image",
            "url": "https://ucarecdn.com/35ef19d9-b73f-4470-939d-ddf8aa1e0699/shahithali.jpg"
          }
        ],
        "description": "A luxurious thali featuring stuffed parathas, creamy dal makhani, paneer curry, pickle, and accompaniments.",
        "category": "thali",
        "lifeInDays": 1,
        "flavourType": "spicy",
        "createdOn": "2025-01-01T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "LARGE",
        "price": 410,
        "quantity": null,
        "measurement": "per thali",
        "addons": ["Extra Butter", "Raita"],
        "discount": 20,
        "days": "Sunday",
        "type": "Dish",
        "availableToday": true,
        "todayTime": "Lunch",
        "ratings": 4.7,
       "foodItems": [
      {
        "id": 7,
        "name": "Laccha Paratha",
        "quantity": "2 pieces",
        "isRequired": true,
        "availableToday": "true",
        "weight": null,
        "description": "Layered and flaky Indian flatbread, made with whole wheat flour and cooked on a tawa."
      },
      {
        "id": 76,
        "name": "Multi Grain Tawa Roti",
        "quantity": "5 pieces",
        "isRequired": true,
        "availableToday": "true",
        "weight": null,
        "description": "Soft and healthy tawa-cooked roti made with multigrain flour."
      },
      {
        "id": 8,
        "name": "Arahar Dal Tadka",
        "quantity": "1 portion",
        "isRequired": true,
        "availableToday": "true",
        "weight": null,
        "description": "Aromatic lentil curry tempered with desi cow ghee, spices, and herbs."
      },
      {
        "id": 9,
        "name": "Kadhayi Paneer",
        "quantity": "1 portion",
        "isRequired": true,
        "availableToday": "true",
        "weight": "200 g",
        "description": "Rich paneer curry cooked in olive oil, with bold flavors of organic spices."
      },
      {
        "id": 10,
        "name": "Freshly Cut Green Salad",
        "quantity": null,
        "isRequired": true,
        "availableToday": "true",
        "weight": null,
        "description": "A healthy mix of fresh cucumber, tomatoes, and carrots, garnished with lemon and herbs."
      },
  {
    "id": 11,
    "name": "Any Sweet or Laddoo",
    "quantity": "1 piece",
    "isRequired": true,
    "availableToday": "true",
    "weight": null,
    "description": "A delicious dessert made with dry fruits and desi ghee, prepared without refined sugar."
  }
],
        "comments": [
          {
            "id": 1,
            "comment": "Amazing thali, loved the parathas!",
            "userId": 201,
            "userName": "Amit Verma",
            "userImage": "https://example.com/amit.jpg"
          },
          {
            "id": 2,
            "comment": "Perfect blend of flavors. Will order again.",
            "userId": 202,
            "userName": "Sneha Kapoor",
            "userImage": "https://example.com/sneha.jpg"
          }
        ]
      }, 
      {
        "id": 13,
        "name": "aloo-matar-kachori",
        "title": "Aloo Matar Kachori",
        "bestSeason": "All Seasons",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Potatoes", "healthBenefits": "Rich in carbohydrates and potassium" },
          { "id": 2, "name": "Green Peas", "healthBenefits": "High in fiber and protein" },
          { "id": 3, "name": "Whole Wheat Flour", "healthBenefits": "Rich in fiber and nutrients" },
          { "id": 4, "name": "Spices", "healthBenefits": "Boosts digestion and adds flavor" },
          { "id": 5, "name": "Oil", "healthBenefits": "Provides essential fats" }
        ],
        "region": "North India",
        "images": [
          {
            "id": 7,
            "name": "Aloo Matar Kachori Image",
            "url": "https://ucarecdn.com/931e3ccd-2d20-4883-a925-6b4df3d07471/aloomatarkachori.jpg"
          }
        ],
        "description": "Crispy and flaky kachoris stuffed with a spicy potato and green pea mixture, served with chutney.",
        "category": "snacks",
        "lifeInDays": 1,
        "flavourType": "spicy",
        "createdOn": "2025-01-01T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "MEDIUM",
        "price": 189,
        "quantity": 4,
        "measurement": "per plate",
        "addons": ["Extra Chutney", "Curd"],
        "discount": 5,
        "days": "Tuesday",
        "type": "Dish",
        "availableToday": "true",
        "ratings": 4.5,
        "foodItems": [
          {
            "id": 12,
            "name": "Aloo Matar Kachori",
            "quantity": "3 pieces",
            "isRequired": true,
            "availableToday": "true",
            "weight": "250 g",
            "description": "Golden and crispy kachoris stuffed with a flavorful potato and pea mixture."
          },
          {
            "id": 13,
            "name": "Tamarind Chutney",
            "quantity": "1 bowl",
            "isRequired": true,
            "availableToday": "true",
            "weight": "50 g",
            "description": "Sweet and tangy tamarind chutney for dipping."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Perfectly crispy and tasty!",
            "userId": 301,
            "userName": "Ravi Sharma",
            "userImage": "https://example.com/ravi.jpg"
          },
          {
            "id": 2,
            "comment": "Loved the stuffing, very flavorful.",
            "userId": 302,
            "userName": "Meera Jain",
            "userImage": "https://example.com/meera.jpg"
          }
        ]
      },  
      {
        "id": 14,
        "name": "methi-dhaniya-paratha",
        "title": "Methi Dhaniya Paratha",
        "bestSeason": "Winter",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Fresh Fenugreek Leaves (Methi)", "healthBenefits": "Rich in vitamins and fiber" },
          { "id": 2, "name": "Coriander Leaves (Dhaniya)", "healthBenefits": "Boosts immunity and adds freshness" },
          { "id": 3, "name": "Whole Wheat Flour", "healthBenefits": "Rich in fiber and nutrients" },
          { "id": 4, "name": "Spices", "healthBenefits": "Enhances flavor and aids digestion" },
          { "id": 5, "name": "Ghee", "healthBenefits": "Boosts energy and adds flavor" }
        ],
        "region": "North India",
        "images": [
          {
            "id": 8,
            "name": "Methi Dhaniya Paratha Image",
            "url": "https://ucarecdn.com/87e0654b-9059-4141-b385-b21360e41603/methidhaniyaparatha.jpg"
          }
        ],
        "description": "Soft and flavorful parathas made with fresh fenugreek and coriander leaves, served with creamy dahi.",
        "category": "breakfast",
        "lifeInDays": 1,
        "flavourType": "mild spicy",
        "createdOn": "2025-01-01T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "LARGE",
        "price": 120,
        "quantity": 2,
        "measurement": "per plate",
        "addons": ["Butter", "Pickle"],
        "discount": 10,
        "days": "Sunday",
        "type": "Dish",
        "availableToday": "true",
        "ratings": 4.7,
        "foodItems": [
          {
            "id": 14,
            "name": "Methi Dhaniya Paratha",
            "quantity": "2 pieces",
            "isRequired": true,
            "availableToday": "true",
            "weight": "200 g",
            "description": "Freshly made parathas with the goodness of methi and dhaniya."
          },
          {
            "id": 15,
            "name": "Dahi (Yogurt)",
            "quantity": "1 bowl",
            "isRequired": true,
            "availableToday": "true",
            "weight": "100 g",
            "description": "Thick and creamy yogurt served as a side."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Perfect winter breakfast, very fresh and tasty!",
            "userId": 401,
            "userName": "Anjali Verma",
            "userImage": "https://example.com/anjali.jpg"
          },
          {
            "id": 2,
            "comment": "The parathas were so soft and the dahi was creamy. Loved it!",
            "userId": 402,
            "userName": "Rahul Mehta",
            "userImage": "https://example.com/rahul.jpg"
          }
        ]
      },
      {
        "id": 15,
        "name": "royal-red-soup",
        "title": "Royal Red Soup",
        "bestSeason": "Winter",
        "isNonVeg": false,
        "ingredients": [
          {
            "id": 1,
            "name": "Beetroot",
            "healthBenefits": "Rich in antioxidants and improves blood circulation"
          },
          {
            "id": 2,
            "name": "Carrots",
            "healthBenefits": "Boosts immunity and improves eyesight"
          },
          {
            "id": 3,
            "name": "Tomatoes",
            "healthBenefits": "Rich in vitamin C and improves skin health"
          },
          {
            "id": 4,
            "name": "Coriander",
            "healthBenefits": "Aids digestion and is rich in antioxidants"
          }
        ],
        "region": "North India",
        "images": [
          {
            "id": 1,
            "name": "Royal Red Soup Image",
            "url": "https://ucarecdn.com/5c77db5a-1797-4454-8ef1-da22da31d90e/royalredsoup.jpg"
          }
        ],
        "description": "A vibrant and nutritious soup made with fresh beetroots, carrots, and tomatoes, garnished with paneer cubes and coriander leaves.",
        "category": "soups",
        "lifeInDays": 2,
        "flavourType": "mildly spicy",
        "createdOn": "2025-01-25T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-25T00:00:00.000Z",
        "size": "Medium",
        "price": 190,
        "quantity": null,
        "measurement": "Bowl",
        "addons": ["Extra Paneer", "Cream"],
        "discount": 10,
        "days": "Monday",
        "type": "Dish",
        "availableToday": true,
        "todayTime": "Dinner",
        "ratings": 5.0,
        "foodItems": [
          {
            "id": 1,
            "name": "Soup Base",
            "quantity": null,
            "isRequired": true,
            "availableToday": false,
            "weight": "300ml",
            "description": "Fresh and nutritious Beetroot, Carrot and Corriander vegetable soup base."
          },
          {
            "id": 2,
            "name": "Paneer Cubes",
            "quantity": 6,
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "Soft and fresh paneer cubes for garnish."
          },
        ],
        "comments": []
      }            
    ];
  }
}
