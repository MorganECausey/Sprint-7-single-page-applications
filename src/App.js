import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Pizza from './components/Pizza';
import Conformation from './components/Confirmation';
import axios from "axios";
import * as yup from "yup";

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



const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
