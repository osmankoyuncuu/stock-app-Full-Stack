import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectModal({
  label,
  valueName,
  data,
  info,
  handleChange,
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={info?.valueName}
          label={label}
          name={valueName}
          onChange={handleChange}
          defaultValue=""
        >
          {data?.map((item) => (
            <MenuItem key={item?.id} value={item?.id}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
