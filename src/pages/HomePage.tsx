import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { StatsCard } from "../shared-types";
import MonthChart from "../components/charts/MonthChart";
import SalesChart from "../components/charts/SalesChart";
import PieGraph from "../components/charts/PieGraph";
import { salesData, categoryData, salesChartsInfo } from "../data/HomePageChartsData"

const STATS_CARD: StatsCard[] = [
  { name: "Total Sales", icon: Zap, value: "$12,345", color: "#6366F1" },
  { name: "New Users", icon: Users, value: "567", color: "#8B5CF6" },
  {
    name: "Total Products",
    icon: ShoppingBag,
    value: "$12,345",
    color: "#EC4899",
  },
  {
    name: "Conversion Rate",
    icon: BarChart2,
    value: "12.5%",
    color: "#10B981",
  },
];

const HomePage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Home" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {STATS_CARD.map((item) => (
            <StatCard
              key={item.name}
              name={item.name}
              icon={item.icon}
              value={item.value}
              color={item.color}
            />
          ))}
        </motion.div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MonthChart chartData={salesData} />
          <PieGraph pieChartData={categoryData} />
          <SalesChart salesChartData={salesChartsInfo} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
