import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { indigo, pink, amber } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { flexKpiCard } from "../styles/globalStyle";

const KpiCards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  console.log(sales);
  console.log(purchases);

  const total = (data) =>
    data
      ?.map((item) => Number(item?.price_total))
      .reduce((acc, val) => acc + val, 0);

  const profit = (sales, purhases) => {
    const filterDataId = sales?.map((item) => item.product_id);
    const filterPurh = purchases?.filter((item) =>
      filterDataId?.includes(item.product_id)
    );
    console.log(filterPurh);
  };
  profit(sales);

  const data = [
    {
      title: "sales",
      metric: total(sales) || "",
      icon: <MonetizationOnIcon />,
      color: indigo[900],
      bgColor: indigo[100],
    },
    {
      title: "profit",
      metric: total(sales) - total(purchases) || "",
      icon: <ShoppingCartIcon />,
      color: pink[900],
      bgColor: pink[100],
    },
    {
      title: "purchases",
      metric: total(purchases) || "",
      icon: <PaymentsIcon />,
      color: amber[900],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid container gap={2} justifyContent="center" alignItems="center">
      {data?.map((item) => (
        <Grid
          item
          key={item?.title}
          xs={12}
          sm={4}
          md={3}
          sx={{ minWidth: "380px" }}
        >
          <Paper sx={{ p: 3 }} elevation={10}>
            <Box sx={flexKpiCard}>
              <Avatar
                sx={{
                  width: "4rem",
                  height: "4rem",
                  color: item?.color,
                  backgroundColor: item?.bgColor,
                }}
              >
                {item?.icon}
              </Avatar>
              <Box>
                <Typography variant="button">{item?.title}</Typography>
                <Typography variant="h5">$ {item?.metric}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
