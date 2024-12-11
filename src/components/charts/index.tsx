import { ResponsiveContainer, LineChart, BarChart as RechartsBarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface ChartProps {
  data: any[];
  height?: number | string;
}

interface LineChartProps extends ChartProps {
  lines: {
    key: string;
    color: string;
  }[];
}

interface BarChartProps extends ChartProps {
  dataKey: string;
  color?: string;
}

const defaultHeight = 300;

export function LineChartComponent({ data, lines, height = defaultHeight }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 47%, 15%)" vertical={false} />
        <XAxis 
          dataKey="name" 
          stroke="hsl(215, 20%, 65%)"
          axisLine={false}
          tickLine={false}
          dy={10}
        />
        <YAxis 
          stroke="hsl(215, 20%, 65%)"
          axisLine={false}
          tickLine={false}
          dx={-10}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(222, 47%, 13%)",
            border: "1px solid hsl(222, 47%, 15%)",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
          itemStyle={{ color: "hsl(215, 20%, 65%)" }}
        />
        {lines.map(({ key, color }) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BarChart({ data, dataKey, color = "hsl(160, 84%, 39%)", height = defaultHeight }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="hsl(222, 47%, 15%)"
          vertical={false}
        />
        <XAxis 
          dataKey="name" 
          stroke="hsl(215, 20%, 65%)"
          axisLine={false}
          tickLine={false}
          dy={10}
        />
        <YAxis 
          stroke="hsl(215, 20%, 65%)"
          axisLine={false}
          tickLine={false}
          dx={-10}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(222, 47%, 13%)",
            border: "1px solid hsl(222, 47%, 15%)",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
          itemStyle={{ color: "hsl(215, 20%, 65%)" }}
        />
        <Bar 
          dataKey={dataKey} 
          fill={color}
          radius={[4, 4, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}

export function ChartLegend({ items }: { items: { label: string; color: string; }[] }) {
  return (
    <div className="flex items-center space-x-2">
      {items.map(({ label, color }) => (
        <div key={label} className="flex items-center text-sm">
          <div 
            className="h-3 w-3 rounded-full mr-1"
            style={{ backgroundColor: color }}
          />
          {label}
        </div>
      ))}
    </div>
  );
}