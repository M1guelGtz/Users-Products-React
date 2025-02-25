import { useState } from "react";
//import { useEditProductModel } from "../Model/editProductModel";
import { useProductModel } from "../Model/viewProductsModel";

export default function UpdateProduct(props) {
    const [newProduct, setNewProduct] = useState({});
    const editProduct = useProductModel();
    //const editProduct = useEditProductModel();
    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };
    const handleEditProduct = () => {
        let product = {
            nombre: newProduct.nombre,
            precio: parseInt(newProduct.precio),
            cantidad: parseInt(newProduct.cantidad),
        }
        editProduct(product, props.id);
        console.log(product, props.id);
        setNewProduct({});
        props.setIsModalOpen(false);
    };
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
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700" onClick={handleEditProduct} > Guardar </button>
                </div>
            </div>
        </div>
    )
}
