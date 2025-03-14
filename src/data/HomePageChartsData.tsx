import { IPieChart, MonthSalesData, MonthStatsChartData } from "../shared-types";

export const salesData: MonthSalesData[] = [
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 3800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
  { name: "Jan", sales: 6100 },
  { name: "Jan", sales: 5300 },
  { name: "Mar", sales: 5900 },
  { name: "Apr", sales: 8600 },
  { name: "May", sales: 6300 },
  { name: "Jun", sales: 7100 },
]

export const categoryData: IPieChart[] = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sport & Outdoors", value: 1900 },
];

export const salesChartsInfo: MonthStatsChartData[] = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
]