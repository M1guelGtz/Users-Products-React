// src/Presentation/UI/Products.js
import { useState } from "react";
//import { useDeleteProductModel } from "../Model/deleteModel.js";
import { useProductModel } from "../Model/viewProductsModel.js";
import CreateProduct from "./CreateProduct.jsx";
import UpdateProduct from "./UpdateProduct.jsx";

const Products = () => {
  const { products, loading, deleteProduct, editProduct, addProduct } = useProductModel();
  console.log("edeit product en product.jsx", editProduct)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const deleteProductById = (id) => {
    deleteProduct(id);
  };
  const openEditModal = (product) => {
    setSelectedProduct(product); 
    setIsModalEditOpen(true);
  };
  if (loading)
    return <p className="text-center text-xl text-gray-600">Cargando productos...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Lista de Productos
      </h1>
      <div className="w-full  flex justify-between ">

      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        onClick={() => setIsModalOpen(true)}
      >
        Agregar Producto
      </button>
      <button
        className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        
      >
        Cerrar sesion
      </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50">
          <CreateProduct addProduct={addProduct} setIsModalOpen={setIsModalOpen} />
        </div>
      )}

      {isModalEditOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50">
          <UpdateProduct
            editProduct={editProduct}
            id={selectedProduct.id}
            setIsModalOpen={setIsModalEditOpen}
          />
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Nombre</th>
              <th className="border p-2 text-left">Precio</th>
              <th className="border p-2 text-left">Cantidad</th>
              <th className="border p-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border p-2">{product.nombre}</td>
                <td className="border p-2">${product.precio}</td>
                <td className="border p-2">{product.cantidad}</td>
                <td className="border p-2 flex justify-center space-x-2">
                  <button
                    className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                    onClick={() => openEditModal(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    onClick={() => deleteProductById(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
