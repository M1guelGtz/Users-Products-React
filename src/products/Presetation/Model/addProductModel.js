import { ProductUseCase } from "../../Domain/ProductUseCase.js";
import { useProductModel } from "./getProducts.js";
export const useAddProductModel = () => {
    const {fetchProducts, products} = useProductModel();
    const addProduct = async (product) => {
        await ProductUseCase.addProduct(product);
        fetchProducts();
    };
    return {addProduct}
}