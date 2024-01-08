import Table from "@/components/dashboard/transactions/transactions-table";
import TablePagination from "@/components/dashboard/transactions/table-pagination";
import TableOptions from "@/components/dashboard/transactions/table-options";

const Transactions = () => {
  return (
    <div className="p-6 px-6 flex flex-col gap-6 max-w-screen-2xl">
      <h2 className="text-[20px]">Transactions | This Month</h2>
      <div className="bg-white p-3 rounded">
        <TableOptions />
        <Table />
        <TablePagination />
      </div>
    </div>
  );
};

export default Transactions;
