import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type ChartData = {
  name: string;
  value: number;
};

const data: ChartData[] = [
  { name: "Jan", value: 350 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 250 },
  { name: "Apr", value: 280 },
  { name: "Mei", value: 390 },
  { name: "Jun", value: 180 },
  { name: "Jul", value: 250 },
  { name: "Agu", value: 300 },
  { name: "sep", value: 150 },
  { name: "Okt", value: 250 },
  { name: "Nov", value: 330 },
  { name: "Des", value: 400 },
];

const BarChartComponent = () => {
  return (
    <div className='pr-6 mt-10'>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='value' fill='#6C0AFF' radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
