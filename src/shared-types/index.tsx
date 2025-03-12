export interface StatsCard {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
  value: string;
  color: string;
}

export interface SidebarItems {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
  color: string;
  path: string;
}

export interface SalesData {
  name: string;
  sales: number;
}

export interface CategorySalesData {
  name: string;
  value: number;
}