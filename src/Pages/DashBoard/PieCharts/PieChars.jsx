
import { PieChart, Pie, Cell, Legend, Tooltip, } from 'recharts';

const data = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 200 },
  { name: 'Category D', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p>{`${data.name} : ${data.value}`}</p>
      </div>
    );
  }

  return null;
};
const PieChars = () => {
  return (
    <div >
      
     <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </PieChart>
    </div>
  );
};

export default PieChars;