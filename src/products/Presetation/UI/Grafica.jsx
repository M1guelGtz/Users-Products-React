import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const RealTimeChart = (props) => {
  return (
    <div className="p-4 bg-gray-800 rounded-xl shadow-md text-gray-300">
      <h2 className="text-xl font-bold mb-4">Datos en Tiempo Real</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={props.data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="time" stroke="#bbb" />
          <YAxis stroke="#bbb" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={props.name} stroke={props.color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealTimeChart;