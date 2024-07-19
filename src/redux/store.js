import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice"; //slice sono le singole parti dello stato
import { citiesReducer } from "./citiesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer, //nomi delle variabili di stato e la funzione che aggiornato le proprieta
    cities: citiesReducer,
  },
});
