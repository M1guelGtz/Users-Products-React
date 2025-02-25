import { UserRepository } from "../Data/Repository/user.js";
const userRepository = new UserRepository();

export const UserUseCase = {
    async getUsers() {
        return await userRepository.getAll();
    },
    async getUser(id) {
        return await userRepository.getById(id);
    },
    async addUser(user) {
        return await userRepository.create(user);
    },
    async editUser( user, id) {
        return await userRepository.update(id, user);
    },
    async removeUser(id) {
        return await userRepository.delete(id);
    },
};
