import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Pizza from './components/Pizza';
import Conformation from './components/Confirmation';
import axios from "axios";
import * as yup from "yup";

//create a form with required fields for validation like name, size, sauce, toppings etc
const formSchema = yup.object().shape({
  customer: yup
    .string()
    .required("Name must be entered")
    .min(2, "name must be at least 2 characters"),
  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "Please select a size"),
  sauce: yup
    .string()
    .required("please select a sauce"),
  pepperoni: yup
    .string(),
  sausage: yup 
    .string(),
  bacon: yup
    .string(),
  ham: yup
    .string(),
  extraCheese: yup
    .string(),
  sub: yup
    .string(),
  special: yup
    .string()
    .notRequired(),
  gluten: yup
    .string()
    .notRequired()
})

//create inital form values for the form
const initialFormValues = {
  customer: "",
  size: "",
  sauce: "",
  pepperoni: false, 
  sausage: false,
  bacon: false, 
  ham: false, 
  extraCheese: false, 
  special: "",
  gluten: false
}

//create inital for value errors
const initialFormErrors = {
  size: "",
  sauce: "",
  customer: ""
}

const initialOrders = []


//create the inital disabled constant


//create the inital states for the form values, disabled state, for errors, and orders
const App = () => {


//create reset function

//create a clear order function

//create a calidation variable

//create a state to update values as entered

//create a state to post the orders to a new page

//create a state to store order data 
return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
