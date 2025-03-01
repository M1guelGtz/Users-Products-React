import { useState } from "react";
import { useProductModel } from "../Model/viewProductsModel.js";
import CreateProduct from "./CreateProduct.jsx";
import RealTimeChart from "./Grafica.jsx";
import UpdateProduct from "./UpdateProduct.jsx";

const Products = () => {
  const { products, data, interval, loading, deleteProduct, editProduct, addProduct } = useProductModel();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  
  const deleteProductById = (id) => deleteProduct(id);
  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsModalEditOpen(true);
  };

  if (loading) {
    return <p className="text-center text-xl text-gray-400">Cargando productos...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-900 shadow-lg rounded-lg text-gray-300">
      <h1 className="text-3xl font-bold text-white text-center mb-6">Lista de Productos</h1>

      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Agregar Producto
        </button>
        
      </div>

      {/* Modales */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <CreateProduct addProduct={addProduct} setIsModalOpen={setIsModalOpen} />
        </div>
      )}

      {isModalEditOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <UpdateProduct
            editProduct={editProduct}
            id={selectedProduct.id}
            setIsModalOpen={setIsModalEditOpen}
          />
        </div>
      )}

      {/* Tabla de Productos */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-md border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left border-b border-gray-700">Nombre</th>
              <th className="p-3 text-left border-b border-gray-700">Precio</th>
              <th className="p-3 text-left border-b border-gray-700">Cantidad</th>
              <th className="p-3 text-center border-b border-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-800">
                <td className="p-3 border-b border-gray-700">{product.nombre}</td>
                <td className="p-3 border-b border-gray-700">${product.precio}</td>
                <td className="p-3 border-b border-gray-700">{product.cantidad}</td>
                <td className="p-3 flex justify-center space-x-2 border-b border-gray-700">
                  <button
                    className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition"
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
        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No hay productos disponibles.</p>
        )}
      </div>
      <div className="w-full flex justify-center flex-col">
        {
          /*
          <RealTimeChart name="Presion_Arterial" color="#3b82f6" data={data} interval={interval}  />
          <RealTimeChart name="Ritmo_Cardiaco" color="#f59e0b" data={data} interval={interval}  />
          <RealTimeChart name="Cantidad_De_Pasos" color="#10b981" data={data} interval={interval}  />
          */ 
        }
      </div>
    </div>
  );
};

export default Products;
