import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStockCalls from "../../hooks/useStockCalls";

export default function BrandModal({ open, setOpen, info, setInfo }) {
  const { postStockData, putStockData } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putStockData("brands", info);
    } else {
      postStockData("brands", info);
    }
    setOpen(false);
    setInfo({
      name: "",
      image: "",
    });
  };
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
            image: "",
          });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <TextField
            label="Firm Name"
            name="name"
            variant="outlined"
            type="text"
            fullWidth
            required
            value={info?.name}
            onChange={handleChange}
          />
          <TextField
            label="Image URL"
            name="image"
            variant="outlined"
            type="url"
            fullWidth
            required
            value={info?.image}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ p: 1.5 }}>
            Save Brand
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
