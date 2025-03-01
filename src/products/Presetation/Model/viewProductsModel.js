import { useCallback, useEffect, useState } from "react";
import { ProductUseCase } from "../../Domain/ProductUseCase";

export const useProductModel = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const interval = setInterval(() => {
    setData((prevData) => {
      const newData = [
        ...prevData,
        {
          time: new Date().toLocaleTimeString(),
          Presion_Arterial: Math.random() * 100,
          Ritmo_Cardiaco: Math.random() * 100,
          Cantidad_De_Pasos: Math.random() * 100,
        },
      ];
      return newData.length > 10 ? newData.slice(1) : newData;
    });
    fetchProducts();
  }, 30000);
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await ProductUseCase.getProducts();
      console.log("Data:", data.products);
      setProducts(data.products);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const editProduct = async (product, id) => {
    await ProductUseCase.editProduct(product, id);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await ProductUseCase.removeProduct(id);
    fetchProducts();
  };

  const addProduct = async (product) => {
    await ProductUseCase.addProduct(product);
    fetchProducts();
  };

  const loadProductToEdit = (id) => {
    const product = products.find((p) => p.id === id);
    setProductToEdit(product);
  };

  return {
    products,
    loading,
    fetchProducts,
    editProduct,
    deleteProduct,
    addProduct,
    loadProductToEdit,
    productToEdit,
    data,
    interval
  };
};
