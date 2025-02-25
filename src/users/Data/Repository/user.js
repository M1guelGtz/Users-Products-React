import { IUsersDataSource } from "../DataSource/Interface/IUserDataSource";
const API_URL = "http://localhost:3000/user/";

export class UserRepository extends IUsersDataSource {
    async getAll() {
        const response = await fetch(API_URL);
        return response.json();
    }
    async getById(id) {
        const response = await fetch(`${API_URL}${id}`);
        return response.json();
    }
    async create(User) {
        const response = await fetch(`${API_URL}create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(User),
        });
        return response.json();
    }
    async update(id, user) {
        const response = await fetch(`${API_URL}update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        return response.json();
    }
    async delete(id) {
        await fetch(`${API_URL}delete/${id}`, { method: "DELETE" });
    }
}
