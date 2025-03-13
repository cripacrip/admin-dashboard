import { motion } from "framer-motion";

import StatCard from "../components/common/StatCard";
import Header from "../components/common/Header";

import { StatsCard } from "../shared-types";

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../components/products/ProductTable";

const STATS_CARD: StatsCard[] = [
  { name: "Total Product", icon: Package, value: "1234", color: "#6366F1" },
  { name: "Top Selling", icon: TrendingUp, value: "89", color: "#10B981" },
  {
    name: "Low Stock",
    icon: AlertTriangle,
    value: "23",
    color: "#F59E0B",
  },
  {
    name: "Total Revenue",
    icon: DollarSign,
    value: "$543,210",
    color: "#EF4444",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 200 }}
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

        <ProductTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
