import Header from "@/components/dashboard/header";
import Overview from "@/components/dashboard/overview";
import Transactions from "@/components/dashboard/transactions/transactions";
import Sidebar from "@/components/dashboard/sidebar/sidebar";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="bg-[#fafafa] md:w-full min-h-screen">
        <Header />
        <Overview />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
