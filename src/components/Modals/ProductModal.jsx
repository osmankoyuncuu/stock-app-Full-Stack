import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStockCalls from "../../hooks/useStockCalls";
import SelectModal from "./SelectModal";
import { useSelector } from "react-redux";

export default function ProductModal({ open, setOpen, info, setInfo }) {
  const { postStockData } = useStockCalls();
  const { categories, brands } = useSelector((state) => state.stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    setOpen(false);
    setInfo({
      name: "",
      category_id: "",
      brand_id: "",
    });
  };
  console.log(categories);
  console.log(brands);
  console.log(info);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setInfo({
            name: "",
            category_id: "",
            brand_id: "",
          });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <SelectModal
            label={"Category"}
            valueName={"category_id"}
            data={categories}
            info={info}
            setInfo={setInfo}
            handleChange={handleChange}
          />
          <SelectModal
            label={"Brand"}
            valueName={"brand_id"}
            data={brands}
            info={info}
            setInfo={setInfo}
            handleChange={handleChange}
          />
          <TextField
            label="Product Name"
            name="name"
            variant="outlined"
            type="text"
            fullWidth
            required
            value={info?.name}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ p: 1.5 }}>
            Add New Product
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
