import { ProductUseCase } from "../../Domain/ProductUseCase.js";
import { useProductModel } from "./getProducts.js";
export const useDeleteProductModel = () => {
  const {fetchProducts} = useProductModel();
  const deleteProduct = async (id) => {
    await ProductUseCase.removeProduct(id);
    fetchProducts();
  };
  return {deleteProduct}
}