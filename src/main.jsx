// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Products from "./products/Presetation/UI/product";
import ViewUsers from "./users/Presetation/UI/ViewUsers";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Products />
    <ViewUsers/>
  </React.StrictMode>
);
