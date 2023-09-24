import PieChars from "../PieCharts/PieChars";
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter";
import VerticalChart from "../VerticalChart/VerticalChart";

const Dashboard = () => {
  return (
    <div>
      <SearchAndFilter />
      <div className="md:flex justify-evenly items-center">
        <PieChars />
        <VerticalChart />
      </div>
    </div>
  );
};

export default Dashboard;
