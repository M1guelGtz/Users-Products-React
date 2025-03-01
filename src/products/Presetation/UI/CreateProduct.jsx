import React, { useState } from "react";

export default function CreateProduct({ addProduct, setIsModalOpen }) {
    const [newProduct, setNewProduct] = useState({ nombre: "", precio: "", cantidad: "" });

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleAddProduct = () => {
        const product = {
            nombre: newProduct.nombre,
            precio: parseInt(newProduct.precio),
            cantidad: parseInt(newProduct.cantidad),
        };
        addProduct(product);
        setNewProduct({ nombre: "", precio: "", cantidad: "" });
        setIsModalOpen(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-gray-300">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Agregar Producto</h2>
            <label className="block mb-3">
            <span className="text-gray-400">Nombre</span>
            <input
                type="text"
                name="nombre"
                value={newProduct.nombre}
                onChange={handleChange}
                className="w-full mt-1 p-2 bg-gray-800 text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out custom-border"
                required
            />
            </label>
            <label className="block mb-3">
            <span className="text-gray-400">Precio</span>
            <input
                type="number"
                name="precio"
                value={newProduct.precio}
                onChange={handleChange}
                className="w-full mt-1 p-2 bg-gray-800 text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out custom-border"
                required
            />
            </label>
            <label className="block mb-4">
            <span className="text-gray-400">Cantidad</span>
            <input
                type="number"
                name="cantidad"
                value={newProduct.cantidad}
                onChange={handleChange}
                className="w-full mt-1 p-2 bg-gray-800 text-white border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out custom-border"
                required
            />
            </label>
            <div className="flex justify-end space-x-3">
            <button
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
                onClick={() => setIsModalOpen(false)}
            >
                Cancelar
            </button>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={handleAddProduct}
            >
                Guardar
            </button>
            </div>
        </div>
        </div>
    );
}
