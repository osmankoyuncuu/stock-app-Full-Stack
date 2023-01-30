import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useNavigate } from "react-router-dom";

const icons = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    url: "/stock/",
  },
  {
    title: "Purchase",
    icon: <ShoppingCartIcon />,
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    icon: <AttachMoneyIcon />,
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    icon: <StoreIcon />,
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    icon: <StarsIcon />,
    url: "/stock/brands/",
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    url: "/stock/products/",
  },
  {
    title: "Admin Panel",
    icon: <SupervisorAccountIcon />,
    url: "https://13676.fullstack.clarusway.com/admin",
  },
];

const iconStyle = {
  color: "#eee",
  "&:hover": { color: "red" },
  "& .MuiSvgIcon-root": { color: "#eee" },
  "&:hover .MuiSvgIcon-root": { color: "red" },
};

const MenuListItems = () => {
  const navigate = useNavigate();
  return (
    <List>
      {icons?.map((item, index) =>
        item?.url.includes("http") ? (
          <ListItem key={index} disablePadding>
            <ListItemButton to={item?.url} sx={iconStyle}>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.title} />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item?.url)} sx={iconStyle}>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.title} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );
};

export default MenuListItems;
