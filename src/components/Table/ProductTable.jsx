import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { btnHoverStyle, flexCenterTable } from "../../styles/globalStyle";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import Box from "@mui/material/Box";
import useStockCalls from "../../hooks/useStockCalls";

const ProductTable = ({
  handleSort,
  columns,
  sortedData,
  isBrandSelected,
  isProductSelected,
}) => {
  const { deleteStockData } = useStockCalls();
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">
              <Box
                sx={flexCenterTable}
                onClick={() => handleSort("brand", "text")}
              >
                <Box>Brand</Box>
                {columns?.brand === 1 ? (
                  <VerticalAlignBottomIcon />
                ) : (
                  <VerticalAlignTopIcon />
                )}
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box
                sx={flexCenterTable}
                onClick={() => handleSort("name", "text")}
              >
                <Box>Name</Box>
                {columns?.name === 1 ? (
                  <VerticalAlignBottomIcon />
                ) : (
                  <VerticalAlignTopIcon />
                )}
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box
                sx={flexCenterTable}
                onClick={() => handleSort("stock", "number")}
              >
                <Box>Stock</Box>
                {columns?.stock === 1 ? (
                  <VerticalAlignBottomIcon />
                ) : (
                  <VerticalAlignTopIcon />
                )}
              </Box>
            </TableCell>
            <TableCell align="center">Operation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData
            ?.filter((item) => isBrandSelected(item))
            .filter((item) => isProductSelected(item))
            .map((product, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{product?.category}</TableCell>
                <TableCell align="center">{product?.brand}</TableCell>
                <TableCell align="center">{product?.name}</TableCell>
                <TableCell align="center">{product?.stock}</TableCell>
                <TableCell align="center">
                  <DeleteIcon
                    sx={btnHoverStyle}
                    onClick={() => deleteStockData("products", product?.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
