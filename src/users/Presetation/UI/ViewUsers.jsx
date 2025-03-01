import React from 'react';
import { useUserModel } from '../Model/viewUsersModel';

export default function ViewUsers() {
    const { users, loading, editUser, deleteUser } = useUserModel();

    if (loading)
        return <p className="text-center text-xl text-gray-400">Cargando usuarios...</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-900 shadow-lg rounded-lg text-gray-300">
            <h1 className="text-3xl font-bold text-white text-center mb-6">
                Lista de Usuarios
            </h1>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg shadow-md border border-gray-700">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="p-3 text-left border-b border-gray-700">ID</th>
                            <th className="p-3 text-left border-b border-gray-700">Nombre</th>
                            <th className="p-3 text-left border-b border-gray-700">Email</th>
                            <th className="p-3 text-center border-b border-gray-700">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-800">
                                    <td className="p-3 border-b border-gray-700">{user.id}</td>
                                    <td className="p-3 border-b border-gray-700">{user.name}</td>
                                    <td className="p-3 border-b border-gray-700">{user.email}</td>
                                    <td className="p-3 flex justify-center space-x-2 border-b border-gray-700">
                                        <button
                                            className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition"
                                            onClick={() => editUser(user)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="p-4 text-center text-gray-500">
                                    No hay usuarios registrados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
