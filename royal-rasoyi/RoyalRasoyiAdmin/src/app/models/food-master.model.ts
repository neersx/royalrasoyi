export interface FoodMaster {
    id: number;
    name: string;
    title: string;
    bestSeason: string;
    isNonVeg: boolean;
    ingredients: { id: number; name: string; healthBenefits: string }[];
    region: string;
    images: { id: number; name: string; url: string }[];
    description: string;
    category: string;
    lifeInDays: number;
    flavourType: string;
    createdOn: string;
    isDeleted: boolean;
    lastUpdatedOn: string;
    defaultSize: string;
    price: number;
    prices: { size: string; quantity: number; price: number }[];
    measurement: string;
    addons: string[];
    discount: number;
    days: string;
    type: string;
    availableToday: boolean;
    ratings: number;
    checked?: boolean;
    foodItems: { id: number; name: string; quantity: number | null; isRequired: boolean; availableToday: boolean; weight: string; description: string }[];
  }
  