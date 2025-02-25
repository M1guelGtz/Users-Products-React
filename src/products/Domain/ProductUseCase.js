import { ProductRepository } from "../../products/Data/Repository/Product.js";

const productRepository = new ProductRepository();

export const ProductUseCase = {
    async getProducts() {
        return await productRepository.getAll();
    },
    async getProduct(id) {
        return await productRepository.getById(id);
    },
    async addProduct(product) {
        return await productRepository.create(product);
    },
    async editProduct( product, id) {
        return await productRepository.update(id, product);
    },
    async removeProduct(id) {
        return await productRepository.delete(id);
    },
};
