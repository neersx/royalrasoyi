import { Injectable } from "@angular/core";
import { MEASUREMENT_UNIT } from "../constants/food-measurement.constants";

@Injectable({
  providedIn: 'root'
})
export class MeasurementUnitService {
  constructor() {}
  measurementUnits = MEASUREMENT_UNIT;

  // Function to get label by key
  getMeasurementLabel(key: string): string {
    return Object.values(this.measurementUnits).find(unit => unit.key === key)?.label || 'Unknown';
  }
}