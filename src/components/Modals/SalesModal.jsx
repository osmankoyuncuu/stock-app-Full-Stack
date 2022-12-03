import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStockCalls from "../../hooks/useStockCalls";
import SelectModal from "./SelectModal";
import { useSelector } from "react-redux";

export default function SalesModal({ open, setOpen, info, setInfo }) {
  const { postStockData, putStockData } = useStockCalls();
  const { brands, products } = useSelector((state) => state.stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info?.id) {
      putStockData("sales", info);
    } else {
      postStockData("sales", info);
    }
    setOpen(false);
    setInfo({
      brand_id: "",
      product_id: "",
      quantity: "",
      price: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: name === "quantity" ? Number(value) : value });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setInfo({
            brand_id: "",
            product_id: "",
            quantity: "",
            price: "",
          });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <SelectModal
            label={"Brand"}
            valueName={"brand_id"}
            data={brands}
            info={info}
            setInfo={setInfo}
            handleChange={handleChange}
          />
          <SelectModal
            label={"Product"}
            valueName={"product_id"}
            data={products}
            info={info}
            setInfo={setInfo}
            handleChange={handleChange}
          />
          <TextField
            label="Quantity"
            name="quantity"
            variant="outlined"
            type="number"
            fullWidth
            required
            value={info?.quantity}
            onChange={handleChange}
          />
          <TextField
            label="Price"
            name="price"
            variant="outlined"
            type="text"
            fullWidth
            required
            value={info?.price}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ p: 1.5 }}>
            Add New Sale
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
