import Grid from "@mui/material/Grid";
import { LineChart } from "@tremor/react";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const dataFormatter = (number) =>
    `$${Intl.NumberFormat("us").format(number).toString()}`;

  const salesData = sales?.map((sale) => ({
    date: sale?.createds,
    sales: Number(sale?.price_total),
  }));
  const purchasesData = purchases?.map((purchase) => ({
    date: purchase?.createds,
    purchases: Number(purchase?.price_total),
  }));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ mt: 6 }}
    >
      <Grid item sx={{ minWidth: "400px", width: "35rem" }}>
        <Card sx={{ p: 3 }}>
          <Typography>Daily Sales(USD)</Typography>
          <LineChart
            data={salesData}
            dataKey="date"
            categories={["sales"]}
            colors={["blue"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
          />
        </Card>
      </Grid>
      <Grid item sx={{ minWidth: "400px", width: "35rem" }}>
        <Card sx={{ p: 3 }}>
          <Typography>Daily Purchases(USD)</Typography>
          <LineChart
            data={purchasesData}
            dataKey="date"
            categories={["purchases"]}
            colors={["red"]}
            valueFormatter={dataFormatter}
            marginTop="mt-6"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Charts;
