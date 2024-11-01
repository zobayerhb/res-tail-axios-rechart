import { PieChart as PChart, Pie } from "recharts";

const PieChart = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];

  return <div>
    <PChart width={600} height={300}>
        <Pie data={data01} dataKey='value' fill="#8884d8" outerRadius={60}></Pie>
        <Pie data={data02} dataKey='value' cx="50%" cy="50%" fill="#82ca9d" innerRadius={70} outerRadius={90} label></Pie>
    </PChart>
  </div>;
};

export default PieChart;
