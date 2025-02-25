import React from 'react';
import { useUserModel } from '../Model/viewUsersModel';

export default function ViewUsers() {
    const { users, loading, fetchUsers, editUser, deleteUser, addUser } = useUserModel()

    if (loading)
      return <p className="text-center text-xl text-gray-600">Cargando usuarios...</p>;
    return (
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Lista de usuarios
        </h1>
        <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">id</th>
              <th className="border p-2 text-left">Nombre</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <td className="border p-2 text-left">{user.id}</td>
                  <td className="border p-2 text-left">{user.name}</td>
                  <td className="border p-2 text-left">{user.email}</td>
                  <td className="border p-2 text-center">
                    <button className="px-2 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600" onClick={() => editUser(user)}>
                      Editar
                    </button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => deleteUser(user.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
          </table>
      </div>
      </div>
    )
}
