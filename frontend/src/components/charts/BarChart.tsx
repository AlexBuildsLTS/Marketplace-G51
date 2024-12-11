// src/components/charts/BarChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { marketTrendsData } from "@/data/marketTrends";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartTooltip,
  Legend
);

export const BarChart = () => {
  const data = {
    labels: marketTrendsData.map(dataPoint => dataPoint.name),
    datasets: [
      {
        label: 'Electronics',
        data: marketTrendsData.map(dataPoint => dataPoint.Electronics),
        backgroundColor: '#1d4ed8',
      },
      {
        label: 'Fashion',
        data: marketTrendsData.map(dataPoint => dataPoint.Fashion),
        backgroundColor: '#10b981',
      },
      {
        label: 'Crypto',
        data: marketTrendsData.map(dataPoint => dataPoint.Crypto),
        backgroundColor: '#f59e0b',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Market Trends',
      },
    },
  };

  return <Bar options={options} data={data} />;
};
