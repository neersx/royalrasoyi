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
        "measurement": "Per Plate",
        "addons": ["Chutney"],
        "discount": 5,
        "days": "Thursday",
        "type": "Dish",
        "availableToday": false,
        "todayTime": "Breakfast",
        "ratings": 4.8,
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
            "weight": "",
            "description": "Soft, flaky parathas with a savory potato and onion filling."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Perfect paratha!",
            "userId": 107,
            "userName": "Rajni Sahu",
            "userImage": "https://example.com/eve.jpg"
          },
        ]
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
        "isRequired": false,
        "availableToday": true,
        "weight": null,
        "description": "Layered and flaky Indian flatbread, made with whole wheat flour and cooked on a tawa."
      },
      {
        "id": 76,
        "name": "Multi Grain Tawa Roti",
        "quantity": "5 pieces",
        "isRequired": false,
        "availableToday": true,
        "weight": null,
        "description": "Soft and healthy tawa-cooked roti made with multigrain flour."
      },
      {
        "id": 8,
        "name": "Arahar Dal Tadka",
        "quantity": "1 portion",
        "isRequired": true,
        "availableToday": true,
        "weight": null,
        "description": "Aromatic arahar daal tempered with desi cow ghee, spices, and herbs."
      },
      {
        "id": 9,
        "name": "Kadhayi Paneer",
        "quantity": 1,
        "isRequired": true,
        "availableToday": true,
        "weight": "200 g",
        "description": "Rich paneer curry cooked in olive oil, with bold flavors of organic spices."
      },
      {
        "id": 10,
        "name": "Freshly Cut Green Salad",
        "quantity": null,
        "isRequired": true,
       "availableToday": true,
        "weight": null,
        "description": "A healthy mix of fresh cucumber, tomatoes, and carrots, garnished with lemon and herbs."
      },
  {
    "id": 11,
    "name": "Any Sweet or Laddoo",
    "quantity": "1 piece",
    "isRequired": true,
    "availableToday": true,
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
        "availableToday": true,
        "ratings": 4.5,
        "foodItems": [
          {
            "id": 12,
            "name": "Aloo Matar Kachori",
            "quantity": 3,
            "isRequired": true,
            "weight": null,
            "description": "Golden and crispy kachoris stuffed with a flavorful potato and pea mixture."
          },
          {
            "id": 13,
            "name": "Amla Chutney",
            "quantity": null,
            "weight": "50 g",
            "description": "Sweet and tangy amla chutney for dipping."
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
        "lifeInDays": 2,
        "flavourType": "spicy",
        "createdOn": "2025-01-04T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-05T00:00:00.000Z",
        "size": "MEDIUM",
        "price": 160,
        "quantity": 4,
        "measurement": "Per Plate",
        "addons": ["Chutney"],
        "discount": 5,
        "days": "Thursday",
        "type": "Dish",
        "availableToday": false,
        "todayTime": "Breakfast",
        "ratings": 4.8,
        "foodItems": [
          {
            "id": 14,
            "name": "Methi Dhaniya Paratha",
            "quantity": "2 pieces",
            "isRequired": true,
            "availableToday": true,
            "weight": "200 g",
            "description": "Freshly made parathas with the goodness of methi and dhaniya."
          },
          {
            "id": 15,
            "name": "Dahi (Yogurt)",
            "quantity": "1 bowl",
            "isRequired": true,
            "availableToday": true,
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
      },  
      {
        "id": 16,
        "name": "maharaja-thali",
        "title": "Maharaja Thali",
        "bestSeason": "All Seasons",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Paneer", "healthBenefits": "Rich in protein and calcium. Good for instant energy with Paneer." },
          { "id": 2, "name": "Multi Grain Flour", "healthBenefits": "High in fiber" },
          { "id": 3, "name": "Arahar Daal", "healthBenefits": "Good source of iron and protein" },
          { "id": 4, "name": "Desi Ghee", "healthBenefits": "Provides essential fats" },
          { "id": 5, "name": "Olive Oil", "healthBenefits": "Rich in antioxidants" },
          { "id": 6, "name": "Spices", "healthBenefits": "Boosts metabolism" }
        ],
        "region": "North India",
        "images": [
          {
            "id": 7,
            "name": "Maharaja Thali Image",
            "url": "https://ucarecdn.com/b6721501-6e51-4a40-ab9d-125446a1747e/maharajathali.jpg"
          }
        ],
        "description": "A royal thali featuring: Kadhai Paneer cooked in Olive Oil, Laccha Paratha or Multigrain Roti, Arahar Dal in Desi Ghee Tadka or Mix Dal Fry, Matar Pulao, Fresh Green Salad, and Kesari Kheer.",
        "category": "thali",
        "lifeInDays": 1,
        "flavourType": "spicy",
        "createdOn": "2025-01-27T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-27T00:00:00.000Z",
        "size": "LARGE",
        "price": 490,
        "quantity": null,
        "measurement": "per thali",
        "addons": ["Extra Ghee", "Raita"],
        "discount": 15,
        "days": "All Days",
        "type": "Dish",
        "availableToday": true,
        "todayTime": "Lunch & Dinner",
        "ratings": 5,
        "foodItems": [
          {
            "id": 7,
            "name": "Laccha Paratha",
            "quantity": "2 pieces",
            "isRequired": false,
            "availableToday": true,
            "weight": null,
            "description": "Layered and flaky Indian flatbread, made with whole wheat flour and cooked on a tawa."
          },
          {
            "id": 76,
            "name": "Multi Grain Tawa Roti",
            "quantity": "4 pieces",
            "isRequired": false,
            "availableToday": true,
            "weight": null,
            "description": "Soft and healthy tawa-cooked roti made with multigrain flour."
          },
          {
            "id": 8,
            "name": "Arahar Dal Tadka",
            "quantity": "1 portion",
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "Aromatic arahar daal tempered with desi cow ghee, spices, and herbs."
          },
          {
            "id": 9,
            "name": "Kadhayi Paneer",
            "quantity": 1,
            "isRequired": true,
            "availableToday": true,
            "weight": "200 g",
            "description": "Rich paneer curry cooked in olive oil, with bold flavors of organic spices."
          },
          {
            "id": 10,
            "name": "Matar Pulao",
            "quantity": "1 portion",
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "Fragrant basmati rice cooked with fresh peas and spices."
          },
          {
            "id": 11,
            "name": "Freshly Cut Green Salad",
            "quantity": null,
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "A healthy mix of fresh cucumber, tomatoes, and carrots, garnished with lemon and herbs."
          },
          {
            "id": 12,
            "name": "Kesari Kheer",
            "quantity": "1 portion",
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "A rich and creamy rice pudding infused with saffron and garnished with nuts."
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
        "id": 17,
        "name": "veg-oats-tikki",
        "title": "Veg Oats Tikki",
        "bestSeason": "All Seasons",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Oats", "healthBenefits": "Rich in fiber, helps in digestion and weight management." },
          { "id": 2, "name": "Carrot", "healthBenefits": "Good source of Vitamin A and antioxidants." },
          { "id": 3, "name": "Green Peas", "healthBenefits": "Rich in protein and fiber." },
          { "id": 4, "name": "Paneer", "healthBenefits": "High in protein and calcium for strong bones." },
          { "id": 5, "name": "Capsicum", "healthBenefits": "Loaded with vitamins and boosts immunity." },
          { "id": 6, "name": "Coriander", "healthBenefits": "Helps in detoxification and digestion." },
          { "id": 7, "name": "Garlic", "healthBenefits": "Boosts immunity and has anti-inflammatory properties." },
          { "id": 8, "name": "Tomato", "healthBenefits": "Good source of Vitamin C and antioxidants." },
          { "id": 9, "name": "Green Chili", "healthBenefits": "Boosts metabolism and adds flavor." },
        ],
        "region": "North India",
        "images": [
          {
            "id": 12,
            "name": "Veg Oats Tikki Thumbnail",
            "url": "https://ucarecdn.com/83d79d23-12f9-4f7e-a4c4-1157b875a7de/vegoatstikki.jpg"
          },
          {
            "id": 13,
            "name": "Veg Oats Tikki Dish",
            "url": "https://example.com/veg-oats-tikki.jpg"
          }
        ],
        "description": "A healthy and flavorful breakfast option made with oats, vegetables, and spices, served with mint chutney.",
        "category": "breakfast",
        "lifeInDays": 1,
        "flavourType": "mildly spicy",
        "createdOn": "2025-01-27T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-27T00:00:00.000Z",
        "size": "MEDIUM",
        "price": 190,
        "quantity": null,
        "measurement": "per plate",
        "addons": ["Mint Chutney", "Tomato Sauce"],
        "discount": 10,
        "days": "Monday, Tuesday, Wednesday, Thursday, Friday",
        "type": "Dish",
        "availableToday": true,
        "todayTime": "Breakfast",
        "ratings": 4.5,
        "foodItems": [
          {
            "id": 12,
            "name": "Oats Tikki",
            "quantity": "6 pieces",
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "Crispy on the outside and soft inside, made with fresh vegetables and oats."
          },
          {
            "id": 13,
            "name": "Mint Chutney",
            "quantity": "1 small bowl",
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "Refreshing chutney made with mint, coriander, and spices."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Perfect for a healthy breakfast!",
            "userId": 301,
            "userName": "Rajesh Sharma",
            "userImage": "https://example.com/rajesh.jpg"
          },
          {
            "id": 2,
            "comment": "Loved the flavor and texture of these tikkis.",
            "userId": 302,
            "userName": "Priya Desai",
            "userImage": "https://example.com/priya.jpg"
          }
        ]
      },
      {
        "id": 19,
        "name": "punjabi-chole",
        "title": "Punjabi Chole",
        "bestSeason": "All Seasons",
        "isNonVeg": false,
        "ingredients": [
          { "id": 1, "name": "Chickpeas", "healthBenefits": "Rich in protein, fiber, and essential vitamins." },
          { "id": 2, "name": "Tomatoes", "healthBenefits": "Good source of Vitamin C and antioxidants." },
          { "id": 3, "name": "Onions", "healthBenefits": "Supports immunity and rich in antioxidants." },
          { "id": 4, "name": "Ginger", "healthBenefits": "Aids digestion and boosts immunity." },
          { "id": 5, "name": "Garlic", "healthBenefits": "Has anti-inflammatory and antimicrobial properties." },
          { "id": 6, "name": "Cumin", "healthBenefits": "Promotes digestion and improves immunity." },
          { "id": 7, "name": "Coriander", "healthBenefits": "Rich in vitamins and aids detoxification." },
          { "id": 8, "name": "Chole Masala", "healthBenefits": "Adds flavor and contains digestive spices." },
          { "id": 9, "name": "Green Chilies", "healthBenefits": "Boosts metabolism and adds spice." }
        ],
        "region": "North India",
        "images": [
          {
            "id": 14,
            "name": "Punjabi Chole Thumbnail",
            "url": "https://ucarecdn.com/54d958e5-d9dd-466a-abdb-5c2db68171cf/cholesabzi.jpg"
          },
          {
            "id": 15,
            "name": "Punjabi Chole Dish",
            "url": "https://example.com/punjabi-chole.jpg"
          }
        ],
        "description": "Authentic Punjabi-style Chole, slow-cooked with aromatic spices and served hot.",
        "category": "sabzi",
        "lifeInDays": 1,
        "flavourType": "spicy",
        "createdOn": "2025-01-27T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-27T00:00:00.000Z",
        "size": "MEDIUM",
        "price": 250,
        "quantity": null,
        "measurement": "per bowl (500 gm)",
        "addons": ["Extra Masala", "Onion Salad"],
        "discount": 5,
        "days": "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
        "type": "Dish",
        "availableToday": true,
        "todayTime": "Lunch, Dinner",
        "ratings": 4.7,
        "foodItems": [
          {
            "id": 14,
            "name": "Chole Sabzi",
            "quantity": "500 gm",
            "isRequired": true,
            "availableToday": true,
            "weight": "500 gm",
            "description": "Flavorful and spicy Punjabi Chole served hot in a bowl."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "The taste reminded me of authentic dhaba-style Chole!",
            "userId": 401,
            "userName": "Amit Singh",
            "userImage": "https://example.com/amit.jpg"
          },
          {
            "id": 2,
            "comment": "Perfect spice level and great portion size!",
            "userId": 402,
            "userName": "Nisha Gupta",
            "userImage": "https://example.com/nisha.jpg"
          }
        ]
      },
      {
        "id": 20,
        "name": "raagi-ka-chilla",
        "title": "Raagi Ka Chilla",
        "bestSeason": "All Seasons",
        "isNonVeg": false,
        "ingredients": [
          { "id": 2, "name": "Raagi (Finger Millet)", "healthBenefits": " Rich in calcium, strengthens bones. High in fiber, aids digestion and weight management. Regulates blood sugar levels, good for diabetics. Packed with iron, helps prevent anemia." },
          { "id": 3, "name": "Vegs", "healthBenefits": "Good source of probiotics and calcium. High in antioxidants, protects cells.  Also source of multiple Vitamins" },
          { "id": 5, "name": "Coriander", "healthBenefits": "Rich in vitamins and supports detoxification. Rich in Vitamin K, supports bone health" },
          { "id": 7, "name": "Amla (Indian Gooseberry)", "healthBenefits": "Richest natural source of Vitamin C, boosts immunity. Improves digestion, reduces acidity. Good for skin & hair, promotes anti-aging." },
          { "id": 8, "name": "Desi Ghee", "healthBenefits": "Aids digestion and provides energy." }
        ],
        "region": "Rajasthan, North India",
        "images": [
          {
            "id": 16,
            "name": "Raagi Ka Chilla Thumbnail",
            "url": "https://ucarecdn.com/487d7d1e-ed41-4315-9eb5-f4febe52b80f/gattekaparatha.jpg"
          }
        ],
        "description": "Start your day with a protein-packed, gluten-free breakfast that’s as nutritious as it is delicious! 💪✨ Made with Raagi (Finger Millet) flour, fresh veggies, and aromatic spices, this crispy chilla is rich in calcium, fiber, and essential nutrients. Paired with our tangy Amla Chutney, loaded with Vitamin C & antioxidants, it’s the perfect immunity booster! 🍋",
        "category": "breakfast",
        "lifeInDays": 1,
        "flavourType": "spicy",
        "createdOn": "2025-01-27T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-01-27T00:00:00.000Z",
        "size": "MEDIUM",
        "price": 230,
        "quantity": null,
        "measurement": "per plate (2 Parathas)",
        "addons": ["Extra Curd", "Mint Chutney", "Amla Chutney"],
        "discount": 10,
        "days": "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
        "type": "Dish",
        "availableToday": true,
        "todayTime": "Breakfast",
        "ratings": 5,
        "foodItems": [
          {
            "id": 15,
            "name": "Raagi Ka Chilla",
            "quantity": "2",
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "Freshly prepared Gatte Ka Paratha served with amla-coriander chutney and an optional side of plain curd, enough for 1 adult and 2 kids."
          },
          {
            "id": 15,
            "name": "Amla Chutney",
            "quantity": "1 Portion, small bowl",
            "isRequired": true,
            "availableToday": true,
            "weight": "50 gm",
            "description": "Freshly prepared Amla Chutney served with Gatte Ka Paratha."
          }
        ],
        "comments": [
          {
            "id": 1,
            "comment": "Loved the stuffing, very healthy and filling!",
            "userId": 501,
            "userName": "Ravi Sharma",
            "userImage": "https://example.com/ravi.jpg"
          },
          {
            "id": 2,
            "comment": "Perfectly cooked and great for kids' breakfast.",
            "userId": 502,
            "userName": "Pooja Mehra",
            "userImage": "https://example.com/pooja.jpg"
          }
        ]
      },
      {
        "id": 21,
        "name": "idli-sambhar-combo",
        "title": "Idli Sambhar Combo",
        "bestSeason": "All Seasons",
        "isNonVeg": false,
        "ingredients": [
          {
            "id": 1,
            "name": "Rice",
            "healthBenefits": "Rich in carbohydrates and provides energy"
          },
          {
            "id": 2,
            "name": "Urad Dal",
            "healthBenefits": "Rich in protein and good for digestion"
          },
          {
            "id": 3,
            "name": "Coconut",
            "healthBenefits": "Boosts immunity and aids digestion"
          },
          {
            "id": 4,
            "name": "Spices",
            "healthBenefits": "Enhances metabolism and adds flavor"
          },
          {
            "id": 5,
            "name": "Vegetables",
            "healthBenefits": "Capsicum (Vitamin C), Onion (anti-inflammatory), Carrot (High in beta-carotene), and Coriander (natural detoxifier)."
          }
        ],
        "region": "South India",
        "images": [
          {
            "id": 1,
            "name": "Idli Sambhar Image",
            "url": "https://ucarecdn.com/2737a737-ac7a-44b9-8191-fb029ca2c630/idli.jpg"
          }
        ],
        "description": "A classic South Indian breakfast combo featuring soft idlis served with flavorful sambhar and fresh coconut chutney.",
        "category": "breakfast",
        "lifeInDays": 1,
        "flavourType": "mild spicy",
        "createdOn": "2025-02-01T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-02-01T00:00:00.000Z",
        "size": "STANDARD",
        "price": 190,
        "quantity": null,
        "measurement": "per serving",
        "addons": ["Extra Sambhar", "Extra Chutney"],
        "discount": 10,
        "days": "All Days",
        "type": "Dish",
        "availableToday": true,
        "ratings": 4.9,
        "foodItems": [
          {
            "id": 1,
            "name": "Idli",
            "quantity": "4 pieces",
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "Soft and fluffy steamed rice cakes."
          },
          {
            "id": 2,
            "name": "Sambhar",
            "quantity": "1 bowl",
            "isRequired": true,
            "availableToday": true,
            "weight": "250 ml",
            "description": "A flavorful lentil-based curry with vegetables and spices."
          },
          {
            "id": 3,
            "name": "Coconut Chutney",
            "quantity": "1 portion",
            "isRequired": true,
            "availableToday": true,
            "weight": "50 ml",
            "description": "A refreshing chutney made from fresh coconut and mild spices."
          }
        ]
      },
      {
        "id": 22,
        "name": "uttapam-sambhar-combo",
        "title": "Uttapam Sambhar Combo",
        "bestSeason": "All Seasons",
        "isNonVeg": false,
        "ingredients": [
          {
            "id": 1,
            "name": "Sooji (Semolina)",
            "healthBenefits": "It is light on the stomach and contains dietary fiber, which promotes better digestion and prevents constipation."
          },
          {
            "id": 2,
            "name": "Urad Dal",
            "healthBenefits": "Rich in protein and good for digestion"
          },
          {
            "id": 3,
            "name": "Vegetables",
            "healthBenefits": "High in fiber and essential vitamins"
          },
          {
            "id": 4,
            "name": "Spices",
            "healthBenefits": "Enhances metabolism and adds flavor"
          }
        ],
        "region": "South India",
        "images": [
          {
            "id": 1,
            "name": "Uttapam Sambhar Image",
            "url": "https://ucarecdn.com/07976124-ea86-40b0-933b-6b20ba78fa97/uttapam.jpg"
          }
        ],
        "description": "A delicious South Indian breakfast featuring crispy vegetable uttapam served with aromatic sambhar and coconut chutney.",
        "category": "breakfast",
        "lifeInDays": 1,
        "flavourType": "mild spicy",
        "createdOn": "2025-02-01T00:00:00.000Z",
        "isDeleted": false,
        "lastUpdatedOn": "2025-02-01T00:00:00.000Z",
        "size": "STANDARD",
        "price": 109,
        "quantity": null,
        "measurement": "per piece",
        "addons": ["Extra Sambhar", "Extra Chutney"],
        "discount": 10,
        "days": "All Days",
        "type": "Dish",
        "availableToday": true,
        "ratings": 4.8,
        "foodItems": [
          {
            "id": 1,
            "name": "Uttapam",
            "quantity": "1 piece",
            "isRequired": true,
            "availableToday": true,
            "weight": null,
            "description": "A thick, savory pancake topped with fresh vegetables and cooked to perfection."
          },
          {
            "id": 2,
            "name": "Sambhar",
            "quantity": "1 bowl",
            "isRequired": true,
            "availableToday": true,
            "weight": "250 ml",
            "description": "A flavorful lentil-based curry with vegetables and spices."
          },
          {
            "id": 3,
            "name": "Coconut Chutney",
            "quantity": "1 portion",
            "isRequired": true,
            "availableToday": true,
            "weight": "50 ml",
            "description": "A refreshing chutney made from fresh coconut and mild spices."
          }
        ]
      }

    ];
  }
  
}
