import { useCallback, useEffect, useState } from "react";
import { ProductUseCase } from "../../Domain/ProductUseCase";

export const useProductModel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productToEdit, setProductToEdit] = useState(null);
  const [wsMessage, setWsMessage] = useState(null); // Nuevo estado para el mensaje WebSocket
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la visibilidad del modal

  useEffect(() => {
    fetchProducts();

    // Establecer la conexión WebSocket cuando se monte el componente
    const ws = new WebSocket("ws://localhost:3500/web_socket"); // URL de WebSocket de tu backend
    ws.onopen = () => {
      console.log("Conexión WebSocket establecida");
    };

    ws.onmessage = (event) => {
      console.log("Mensaje WebSocket recibido:", event.data);
      setWsMessage(event.data); // Actualizar el estado con el mensaje recibido
      setIsModalOpen(true); // Abrir el modal cuando se recibe un mensaje
    };

    ws.onerror = (error) => {
      console.log("Error en WebSocket:", error);
    };

    ws.onclose = () => {
      console.log("Conexión WebSocket cerrada");
    };

    return () => {
      ws.close();
    };
  }, []);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await ProductUseCase.getProducts();
      setProducts(data.products);
      console.log(data);
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

  const closeModal = () => {
    setIsModalOpen(false); // Función para cerrar el modal
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
    wsMessage, // Agregar este estado para los mensajes WebSocket
    isModalOpen, // Estado para controlar el modal
    closeModal, // Función para cerrar el modal
  };
};
