import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducers,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";

import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducers,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
