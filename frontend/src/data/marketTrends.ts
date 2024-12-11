// src/data/marketTrends.ts
export interface MarketTrendDataPoint {
  name: string;
  Electronics: number;
  Fashion: number;
  Crypto: number;
}

export const marketTrendsData: MarketTrendDataPoint[] = [
  { name: "Jan", Electronics: 4000, Fashion: 2400, Crypto: 3000 },
  { name: "Feb", Electronics: 3000, Fashion: 1398, Crypto: 4500 },
  { name: "Mar", Electronics: 9800, Fashion: 2000, Crypto: 5000 },
  { name: "Apr", Electronics: 5000, Fashion: 2780, Crypto: 4800 },
  { name: "May", Electronics: 4000, Fashion: 1890, Crypto: 4300 },
  { name: "Jun", Electronics: 3800, Fashion: 2390, Crypto: 3800 },
  { name: "Jul", Electronics: 5500, Fashion: 3490, Crypto: 4100 },
];
