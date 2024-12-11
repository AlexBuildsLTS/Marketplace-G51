// src/components/charts/ChartTooltip.tsx
import React from "react";

interface TooltipItem {
  color: string;
  label: string;
  value: string | number;
}

interface TooltipData {
  active: boolean;
  title: string;
  items: TooltipItem[];
}

interface ChartTooltipProps {
  tooltipData: TooltipData;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ tooltipData }) => {
  if (!tooltipData || !tooltipData.active) return null;

  const { title, items } = tooltipData;

  return (
    <div className="chart-tooltip bg-white border border-border/40 p-2 rounded shadow-md">
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul>
        {items.map((item: any, index: number) => (
          <li key={index} className="flex items-center space-x-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color }}></span>
            <span className="text-xs">
              {item.label}: {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
