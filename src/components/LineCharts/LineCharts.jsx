import { LineChart, Line } from "recharts";

const LineCharts = () => {
  const students = [
    { name: "Alice", math: 85, chemistry: 78, physics: 92 },
    { name: "Bob", math: 92, chemistry: 89, physics: 85 },
    { name: "Charlie", math: 78, chemistry: 85, physics: 80 },
    { name: "Diana", math: 88, chemistry: 92, physics: 87 },
    { name: "Edward", math: 95, chemistry: 90, physics: 93 },
    { name: "Fiona", math: 67, chemistry: 72, physics: 70 },
    { name: "George", math: 74, chemistry: 79, physics: 75 },
    { name: "Helen", math: 91, chemistry: 84, physics: 88 },
    { name: "Ian", math: 82, chemistry: 76, physics: 82 },
    { name: "Jane", math: 89, chemistry: 91, physics: 90 },
  ];

  return (
    <div>
      <LineChart width={400} height={400} data={students}>
        <Line type="monotone" dataKey="math" stroke="red" />
        <Line type="monotone" dataKey="physics" stroke="blue" />
      </LineChart>
    </div>
  );
};

export default LineCharts;
