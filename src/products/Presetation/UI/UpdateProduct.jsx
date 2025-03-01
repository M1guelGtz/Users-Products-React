import { useEffect, useState } from "react";
import { useProductModel } from "../Model/viewProductsModel"; // Importamos el ViewModel

export default function UpdateProduct({ id, setIsModalOpen }) {
  const { loadProductToEdit, productToEdit, editProduct } = useProductModel();
  const [updatedProduct, setUpdatedProduct] = useState({
    nombre: "",
    precio: "",
    cantidad: ""
  });
  useEffect(() => {
    if (id) {
      loadProductToEdit(id); 
    }
  }, [id, loadProductToEdit]);
  useEffect(() => {
    if (productToEdit) {
      setUpdatedProduct({
        nombre: productToEdit.nombre,
        precio: productToEdit.precio,
        cantidad: productToEdit.cantidad
      });
    }
  }, [productToEdit]);
  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };
  const handleUpdateProduct = () => {
    const product = {
      nombre: updatedProduct.nombre,
      precio: parseInt(updatedProduct.precio),
      cantidad: parseInt(updatedProduct.cantidad),
    };
    editProduct(product, id);
    setIsModalOpen(false);
  };
  if (!productToEdit) return <div>Cargando...</div>; // Mientras se carga el producto
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-gray-300">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Editar Producto</h2>
        <label className="block mb-3">
          <span className="text-gray-400">Nombre</span>
          <input
            type="text"
            name="nombre"
            value={updatedProduct.nombre}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
        <label className="block mb-3">
          <span className="text-gray-400">Precio</span>
          <input
            type="number"
            name="precio"
            value={updatedProduct.precio}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-400">Cantidad</span>
          <input
            type="number"
            name="cantidad"
            value={updatedProduct.cantidad}
            onChange={handleChange}
            className="w-full mt-1 p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={handleUpdateProduct}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
