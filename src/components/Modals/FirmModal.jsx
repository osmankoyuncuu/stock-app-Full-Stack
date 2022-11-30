import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStockCalls from "../../hooks/useStockCalls";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const { postStockData, putStockData } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putStockData("firms", info);
    } else {
      postStockData("firms", info);
    }
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      address: "",
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
            phone: "",
            address: "",
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
            value={info?.name}
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            name="phone"
            variant="outlined"
            type="tel"
            fullWidth
            value={info?.phone}
            onChange={handleChange}
          />
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            type="text"
            fullWidth
            value={info?.address}
            onChange={handleChange}
          />
          <TextField
            label="Image URL"
            name="image"
            variant="outlined"
            type="url"
            fullWidth
            value={info?.image}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" fullWidth>
            Save Firm
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
