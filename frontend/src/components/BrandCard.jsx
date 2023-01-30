import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnHoverStyle, flexCenterColumn } from "../styles/globalStyle";
import Box from "@mui/system/Box";
import useStockCalls from "../hooks/useStockCalls";

export default function BrandCard({ brand, setOpen, setInfo }) {
  const { deleteStockData } = useStockCalls();
  return (
    <Card
      sx={{
        width: 275,
        maxWidth: 300,
        height: "350px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "700" }}>
          {brand?.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={brand?.image}
        alt="brand-image"
        sx={{ maxHeight: "140px", objectFit: "contain" }}
      />
      <Box sx={flexCenterColumn}>
        <CardActions>
          <EditIcon
            sx={btnHoverStyle}
            onClick={() => {
              setOpen(true);
              setInfo(brand);
            }}
          />
          <DeleteIcon
            sx={btnHoverStyle}
            onClick={() => deleteStockData("brands", brand?.id)}
          />
        </CardActions>
      </Box>
    </Card>
  );
}
