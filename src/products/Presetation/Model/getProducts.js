import { useCallback, useEffect, useState } from "react";
import { ProductUseCase } from "../../Domain/ProductUseCase";
export const useviewProductModel = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return {products, fetchProducts, loading};
}

