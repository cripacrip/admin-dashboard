import { motion } from "framer-motion";
import { Edit, Trash2Icon, SearchIcon } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

type TableRow = Record<string, string | number>;

interface TableProps {
  tableData: TableRow[];
  tableColumnName: string[];
}

const Table: React.FC<TableProps> = ({ tableData, tableColumnName }) => {
  const [searchQuery, setSearchProduct] = useState("");
  const [filterProducts, setFilteredProducts] = useState(tableData);

  useEffect(() => {
    setFilteredProducts(tableData);
  }, [tableData]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchProduct(term);

    const filtered = tableData.filter(
      (product) => {
        const name = (product.name as string).toLowerCase()
        const category = (product.category as string).toLowerCase()
        return name.includes(term) || category.includes(term);
      }
    );
    setFilteredProducts(filtered);
  };

  const tableRows = useMemo(() => {
    return filterProducts.map((item) => {
      const { id, ...rowData } = item;
      return (
        <motion.tr
          key={id as number}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Object.values(rowData).map((value) => (
            <td
              key={id as number}
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100"
            >
              {value}
            </td>
          ))}
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
            <button className="text-indigo-400 hover:text-indigo-300 mr-2">
              <Edit size={18} />
            </button>
            <button className="text-red-400 hover:text-red-300">
              <Trash2Icon size={18} />
            </button>
          </td>
        </motion.tr>
      );
    });
  }, [filterProducts]);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-mb shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search product..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={searchHandler}
            value={searchQuery}
          />
          <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {tableColumnName.map((item) => (
                <th
                  key={item}
                  className="px-6 py-3 text-left font-medium text-gray-400 uppercase tracking-wider"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">{tableRows}</tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Table;
