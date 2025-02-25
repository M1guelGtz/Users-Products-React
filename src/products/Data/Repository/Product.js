import { IProductDataSource } from "../DataSource/Interface/IProductDataSource";

const API_URL = "http://localhost:3000/products/";

export class ProductRepository extends IProductDataSource {
    async getAll() {
        const response = await fetch(API_URL);
        return response.json();
    }
    async getById(id) {
        const response = await fetch(`${API_URL}${id}`);
        return response.json();
    }
    async create(product) {
        const response = await fetch(`${API_URL}create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
        });
        return response.json();
    }
    async update(id, product) {
        const response = await fetch(`${API_URL}update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        });
        return response.json();
    }
    async delete(id) {
        await fetch(`${API_URL}delete/${id}`, { method: "DELETE" });
    }
}
