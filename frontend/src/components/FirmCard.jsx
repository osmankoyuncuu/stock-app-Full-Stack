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

export default function FirmCard({ firm, setOpen, setInfo }) {
  const { deleteStockData } = useStockCalls();
  return (
    <Card
      sx={{
        width: 275,
        maxWidth: 300,
        height: "425px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent sx={{ height: "130px" }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "700" }}>
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        image={firm?.image}
        alt="firm-image"
        sx={{ maxHeight: "140px", objectFit: "contain" }}
      />
      <Box sx={flexCenterColumn}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ paddingTop: "1rem" }}
        >
          Phone:{firm?.phone}
        </Typography>
        <CardActions>
          <EditIcon
            sx={btnHoverStyle}
            onClick={() => {
              setOpen(true);
              setInfo(firm);
            }}
          />
          <DeleteIcon
            sx={btnHoverStyle}
            onClick={() => deleteStockData("firms", firm?.id)}
          />
        </CardActions>
      </Box>
    </Card>
  );
}
