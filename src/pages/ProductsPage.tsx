import Header from "../components/common/Header";
import PieGraph from "../components/charts/PieGraph";
import MonthChart from "../components/charts/MonthChart";
import Table from "../components/table/Table";

import { salesData, categoryData } from "../data/HomePageChartsData"

import {
  productTableData,
  productTableColumnName,
} from "../data/ProductPageTableData";
import StatsCardGrout from "../components/common/StatsCardGroup";
import { PRODUCT_STATS_DATA as STATS_CARD } from "../data/StatsCardsData"

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <StatsCardGrout statsCard={STATS_CARD} />

        {/* <ProductTable /> */}
        <Table tableData={productTableData} tableColumnName={productTableColumnName}/>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <MonthChart chartData={salesData} />
        <PieGraph pieChartData={categoryData} />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
