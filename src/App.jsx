import "./App.css";
import LineCharts from "./components/LineCharts/LineCharts";
import NavBar from "./components/NavBar/NavBar";
import PieChart from "./components/PieChart/PieChart";
import PricingOptions from "./components/PricingOptions/PricingOptions";

function App() {
  return (
    <>
     <NavBar></NavBar>
     <PricingOptions></PricingOptions>
     <LineCharts></LineCharts>
     <PieChart></PieChart>
    </>
  );
}

export default App;
