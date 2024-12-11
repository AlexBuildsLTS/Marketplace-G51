// src/components/charts/ChartAxis.tsx
import React from "react";

interface ChartAxisProps {
  label: string;
  position: "left" | "right" | "top" | "bottom";
}

export const ChartAxis: React.FC<ChartAxisProps> = ({ label, position }) => {
  return (
    <div className={`chart-axis chart-axis-${position}`}>
      <span>{label}</span>
    </div>
  );
};
