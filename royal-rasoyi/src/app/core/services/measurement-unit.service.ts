import { Injectable } from "@angular/core";
import { MEASUREMENT_UNIT } from "../constants/food-measurement.constants";

@Injectable({
  providedIn: 'root'
})
export class MeasurementUnitService {
  constructor() {}
  measurementUnits = MEASUREMENT_UNIT;

  // Function to get label by key
  getMeasurementLabel(key: string, quantity: number = 0): string {
    if(MEASUREMENT_UNIT.GRAM.key === key && quantity >= 1000) {
      quantity = quantity / 1000;
      key = MEASUREMENT_UNIT.KILOGRAM.key;

    }
    return `${quantity} ${Object.values(this.measurementUnits).find(unit => unit.key === key)?.label}` || 'Unknown';
  }
}