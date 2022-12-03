import { useEffect } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";

const Home = () => {
  const { getStockData } = useStockCalls();
  useEffect(() => {
    getStockData("sales");
    getStockData("purchases");
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={3}>
        Dashboard
      </Typography>
      <KpiCards />
      <Charts />
    </Box>
  );
};

export default Home;
