import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const { getStockData } = useStockCalls();
  useEffect(() => {
    getStockData("firms");
    getStockData("sales");
  }, []);

  return <div>Home</div>;
};

export default Home;
