import Header from "../components/common/Header";
import MonthChart from "../components/charts/MonthChart";
import SalesChart from "../components/charts/SalesChart";
import PieGraph from "../components/charts/PieGraph";
import { salesData, categoryData, salesChartsInfo } from "../data/HomePageChartsData"
import StatsCardGrout from "../components/common/StatsCardGroup";
import { HOME_PAGE_STATS_DATA as STATS_CARD } from "../data/StatsCardsData"

const HomePage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Home" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <StatsCardGrout statsCard={STATS_CARD} />

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
