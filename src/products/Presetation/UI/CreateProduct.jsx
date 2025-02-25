import React, { useState } from 'react';
import { useProductModel } from '../Model/viewProductsModel';
//import { useAddProductModel } from '../Model/addProductModel';
export default function CreateProduct(props) {
    //const addProduct =useAddProductModel();
    const {addProduct} = useProductModel();
    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };
    const handleAddProduct = () => {
        let product = {
            nombre: newProduct.nombre,
            precio: parseInt(newProduct.precio),
            cantidad: parseInt(newProduct.cantidad),
        }
        addProduct(product);
        console.log(product);
        setNewProduct({ nombre: "", precio: "", cantidad: "" });
        props.setIsModalOpen(false);
    };
    const [newProduct, setNewProduct] = useState({ nombre: "", precio: "", cantidad: "" });
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>
                <label className="block mb-2">
                    Nombre:
                    <input type="text" name="nombre"value={newProduct.nombre} onChange={handleChange} className="w-full border p-2 rounded-md"/>
                </label>
                <label className="block mb-2">
                    Precio:
                    <input type="number" name="precio" value={newProduct.precio} onChange={handleChange} className="w-full border p-2 rounded-md" />
                </label>
                <label className="block mb-4"> 
                    Cantidad:
                    <input type="number" name="cantidad" value={newProduct.cantidad} onChange={handleChange} className="w-full border p-2 rounded-md" />
                </label>
                <div className="flex justify-between">
                    <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600" onClick={() => props.setIsModalOpen(false)} > Cancelar </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700" onClick={handleAddProduct} > Guardar </button>
                </div>
            </div>
        </div>
    )
   }
