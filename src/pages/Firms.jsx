import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/Modals/FirmModal";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const { getStockData } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        New Firms
      </Button>

      {firms?.length > 0 && (
        <Grid container justifyContent="center" gap={3} sx={{ mt: 3 }}>
          {firms?.map((firm) => (
            <Grid item key={firm?.id}>
              <FirmCard firm={firm} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
      <FirmModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />
    </Box>
  );
};

export default Firms;
