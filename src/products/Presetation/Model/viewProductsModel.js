import { useCallback, useEffect, useState } from "react";
import { ProductUseCase } from "../../Domain/ProductUseCase";

export const useProductModel = () => {
    const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchProducts();
    }, []);
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
    return { products, loading,fetchProducts, editProduct, deleteProduct, addProduct };
}