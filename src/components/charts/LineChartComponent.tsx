// src/components/charts/LineChartComponent.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { MarketTrendDataPoint } from "@/data/marketTrends";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartComponentProps {
  dataPoints: MarketTrendDataPoint[];
}

export const LineChartComponent: React.FC<LineChartComponentProps> = ({
  dataPoints,
}) => {
  const data = {
    labels: dataPoints.map((point) => point.name),
    datasets: [
      {
        label: "Electronics",
        data: dataPoints.map((point) => point.Electronics),
        borderColor: "#1d4ed8",
        backgroundColor: "#1d4ed8",
      },
      {
        label: "Fashion",
        data: dataPoints.map((point) => point.Fashion),
        borderColor: "#10b981",
        backgroundColor: "#10b981",
      },
      {
        label: "Crypto",
        data: dataPoints.map((point) => point.Crypto),
        borderColor: "#f59e0b",
        backgroundColor: "#f59e0b",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Market Trends Over Time",
      },
    },
  };

  return <Line options={options} data={data} />;
};
