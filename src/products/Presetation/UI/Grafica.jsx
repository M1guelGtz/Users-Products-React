import React, { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const RealTimeChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [
          ...prevData,
          {
            time: new Date().toLocaleTimeString(),
            Presion_Arterial: Math.random() * 100,
            Ritmo_Cardiaco: Math.random() * 100,
            Cantidad_De_Pasos: Math.random() * 100,
            
          },
        ];
        return newData.length > 20 ? newData.slice(1) : newData;
      });
    }, 1000); // Se actualiza cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <h2 className="text-4xl w-full text-center font-bold mb-4">Datos en Tiempo Real</h2>
    <div className="p-4 flex w-full flex-wrap justify-between space-x-3  rounded-xl shadow-md text-gray-300">
      <ResponsiveContainer width="45%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="time" stroke="#bbb" />
          <YAxis stroke="#bbb" />
          <Tooltip />
          <Legend />
          {/* Ajuste de colores a tonos más acordes con el diseño */}
          <Line type="monotone" dataKey="Presion_Arterial" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="45%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="time" stroke="#bbb" />
          <YAxis stroke="#bbb" />
          <Tooltip />
          <Legend />
          {/* Ajuste de colores a tonos más acordes con el diseño */}
          <Line type="monotone" dataKey="Ritmo_Cardiaco" stroke="#f59e0b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default RealTimeChart;
