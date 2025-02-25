import { useCallback, useEffect, useState } from "react";
import { UserUseCase } from "../../Domain/UserUseCase";
export const useUserModel = () => {
    const [users, setusers] = useState([]);
        const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const data = await UserUseCase.getUsers();
            console.log("Data:", data.users);
            setusers(data.users);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        } finally {
            setLoading(false);
        }
    }, []);
    const editUser = async (user, id) => {
        await UserUseCase.editUser(user, id);
        fetchUsers();
    };
    const deleteUser = async (id) => {
        await UserUseCase.removeUser(id);
        fetchUsers();
    };
    const addUser = async (user) => {
        await UserUseCase.addUser(user);
        fetchUsers();
    };
    return { users, loading, fetchUsers, editUser, deleteUser, addUser };
}