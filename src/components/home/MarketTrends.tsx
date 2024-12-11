import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import { LineChartComponent } from "@/components/charts/LineChartComponent";
import { ChartLegend } from "@/components/charts/ChartLegend";
import { MarketTrendDataPoint, marketTrendsData } from "@/data/marketTrends";

const chartLines: { key: keyof MarketTrendDataPoint; color: string }[] = [
  { key: "Electronics", color: "hsl(199, 89%, 48%)" },
  { key: "Fashion", color: "hsl(160, 84%, 39%)" },
  { key: "Crypto", color: "hsl(222, 47%, 25%)" },
];

const legendItems = chartLines.map(({ key, color }) => ({
  label: key,
  color,
}));

interface LineChartProps {
  data: MarketTrendDataPoint[];
  lines: { key: keyof MarketTrendDataPoint; color: string }[];
  height?: number;
}

export function CustomLineChartComponent({
  data,
  lines,
  height = 400,
}: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
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
