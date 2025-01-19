import { makeAutoObservable } from "mobx";
import { Query } from "../graphql/generated";

class CarsStore {
  cars: Query["cars"] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addCarsToStore = (arr: Query["cars"]) => {
    this.cars = arr;
  };
}

export default new CarsStore();
