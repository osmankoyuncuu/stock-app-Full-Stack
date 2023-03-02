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
import EditIcon from "@mui/icons-material/Edit";

const SalesTable = ({
  handleSort,
  columns,
  sortedData,
  isBrandSelected,
  isProductSelected,
  setInfo,
  setOpen,
  open,
}) => {
  const { deleteStockData } = useStockCalls();

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }} elevation={10}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">
              <Box sx={flexCenterTable} onClick={() => handleSort("brand")}>
                <Box>Brand</Box>
                {columns?.brand === 1 ? (
                  <VerticalAlignBottomIcon />
                ) : (
                  <VerticalAlignTopIcon />
                )}
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box sx={flexCenterTable} onClick={() => handleSort("product")}>
                <Box>Product</Box>
                {columns?.product === 1 ? (
                  <VerticalAlignBottomIcon />
                ) : (
                  <VerticalAlignTopIcon />
                )}
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box sx={flexCenterTable} onClick={() => handleSort("quantity")}>
                <Box>Quantity</Box>
                {columns?.quantity === 1 ? (
                  <VerticalAlignBottomIcon />
                ) : (
                  <VerticalAlignTopIcon />
                )}
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box sx={flexCenterTable} onClick={() => handleSort("price")}>
                <Box>Price</Box>
                {columns?.price === 1 ? (
                  <VerticalAlignBottomIcon />
                ) : (
                  <VerticalAlignTopIcon />
                )}
              </Box>
            </TableCell>
            <TableCell align="center">
              <Box
                sx={flexCenterTable}
                onClick={() => handleSort("price_total")}
              >
                <Box>Amount</Box>
                {columns?.price_total === 1 ? (
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
            .map((sales, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {sales?.createds}
                </TableCell>
                <TableCell align="center">{sales?.category}</TableCell>
                <TableCell align="center">{sales?.brand}</TableCell>
                <TableCell align="center">{sales?.product}</TableCell>
                <TableCell align="center">{sales?.quantity}</TableCell>
                <TableCell align="center">${sales?.price}</TableCell>
                <TableCell align="center">${sales?.price_total}</TableCell>
                <TableCell align="center">
                  <EditIcon
                    sx={btnHoverStyle}
                    onClick={() => {
                      setOpen(true);
                      setInfo(sales);
                    }}
                  />
                  <DeleteIcon
                    sx={btnHoverStyle}
                    onClick={() => deleteStockData("sales", sales?.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
