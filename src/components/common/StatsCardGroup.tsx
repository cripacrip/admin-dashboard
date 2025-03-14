import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { StatsCardGroupProps } from "../../shared-types";

const StatsCardGrout: React.FC<StatsCardGroupProps> = ({ statsCard }) => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {statsCard.map((item) => (
        <StatCard
          key={item.name}
          name={item.name}
          icon={item.icon}
          value={item.value}
          color={item.color}
        />
      ))}
    </motion.div>
  );
};

export default StatsCardGrout;
