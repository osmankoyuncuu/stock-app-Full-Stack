import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/Modals/BrandModal";

const Brands = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const { getStockData } = useStockCalls();
  const { brands } = useSelector((state) => state.stock);
  console.log(brands);
  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        New Brand
      </Button>

      {brands?.length > 0 && (
        <Grid container justifyContent="center" gap={3} sx={{ mt: 3 }}>
          {brands?.map((brand) => (
            <Grid item key={brand?.id}>
              <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
      <BrandModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />
    </Box>
  );
};

export default Brands;
