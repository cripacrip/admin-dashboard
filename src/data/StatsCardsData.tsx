import {
  AlertTriangle,
  BarChart2,
  DollarSign,
  Package,
  ShoppingBag,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UsersIcon,
  UserX,
  Zap,
} from "lucide-react";
import { StatsCard } from "../shared-types";

const USER_STATS = {
  totalUsers: 152823,
  newUsersToday: 243,
  activeUsers: 958520,
  churnRate: "2.4%",
};

export const HOME_PAGE_STATS_DATA: StatsCard[] = [
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

export const PRODUCT_STATS_DATA: StatsCard[] = [
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

export const USERS_STATS_DATA: StatsCard[] = [
  {
    name: "Total Users",
    icon: UsersIcon,
    value: USER_STATS.totalUsers,
    color: "#6366F1",
  },
  {
    name: "Active Users",
    icon: UserPlus,
    value: USER_STATS.newUsersToday,
    color: "#F59E0B",
  },
  {
    name: "New Users Today",
    icon: UserCheck,
    value: USER_STATS.activeUsers,
    color: "#F59E0B",
  },
  {
    name: "Churn Rate",
    icon: UserX,
    value: USER_STATS.churnRate,
    color: "#EF4444",
  },
];
