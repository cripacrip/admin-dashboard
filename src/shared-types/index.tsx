export interface StatsCard {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
  value: string | number;
  color: string;
}

export type StatsCardGroupProps = {
  statsCard: StatsCard[];
};

export interface SidebarItems {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
  color: string;
  path: string;
}

// Month interfaces
export interface MonthSalesData {
  name: string;
  sales: number;
}

export interface MonthSalesChartProps {
  chartData: MonthSalesData[];
}

//SalesGraphData
export interface MonthStatsChartData {
  name: string;
  value: number;
}

export interface MonthStatsChart {
  salesChartData: MonthStatsChartData[];
}
//Pie Graph
export interface IPieChart {
  name: string;
  value: number;
}

export interface PieChartDataProps {
  pieChartData: IPieChart[]
}