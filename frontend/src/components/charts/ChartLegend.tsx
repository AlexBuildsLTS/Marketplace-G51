// src/components/charts/ChartLegend.tsx
import React from "react";
import { LegendItem } from "@/types/chart";

interface ChartLegendProps {
  items: LegendItem[];
}

export const ChartLegend: React.FC<ChartLegendProps> = ({ items }) => {
  return (
    <div className="flex space-x-4 chart-legend">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}></span>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
