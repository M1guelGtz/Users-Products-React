// src/main.jsx
import { default as React } from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import Products from "./products/Presetation/UI/product";
import ViewUsers from "./users/Presetation/UI/ViewUsers";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-gray-300 p-6">
        <nav className="flex justify-center space-x-6 mb-6">
          <a href="/productos" className="text-blue-400 hover:text-blue-300">Productos</a>
          <a href="/usuarios" className="text-blue-400 hover:text-blue-300">Usuarios</a>
        </nav>
        <Routes>
          
          <Route path="/productos" element={<Products />} />
          <Route path="/usuarios" element={<ViewUsers />} />
          <Route path="*" element={<Navigate to="/productos" />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

