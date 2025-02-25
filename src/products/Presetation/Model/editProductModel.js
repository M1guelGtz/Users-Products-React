import { ProductUseCase } from "../../Domain/ProductUseCase";
import { useProductModel } from "./getProducts";
export const useEditProductModel = ( ) => {
    const {fetchProducts} = useProductModel();
    const editProduct = async (product, id) => {
        await ProductUseCase.editProduct(product, id);
        fetchProducts();
    };
    return editProduct;
}


