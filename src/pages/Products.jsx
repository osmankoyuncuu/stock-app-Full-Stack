import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import ProductModal from "../components/Modals/ProductModal";
import useSortColumn from "../hooks/useSortColumn";
import { flexCenter } from "../styles/globalStyle";
import MultiSelect from "../components/MultiSelect";
import useMultiSelect from "../hooks/useMultiSelect";
import ProductTable from "../components/Table/ProductTable";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    category_id: "",
    brand_id: "",
  });
  const { products, brands } = useSelector((state) => state.stock);
  const { getProCatBrands } = useStockCalls();

  const columnObj = {
    brand: 1,
    name: 1,
    stock: 1,
  };
  const { sortedData, handleSort, columns } = useSortColumn(
    products,
    columnObj
  );
  const {
    setSelectedOne,
    setSelectedTwo,
    isOneSelected,
    isTwoSelected,
    filteredTwo,
  } = useMultiSelect(products, "brand", "name");

  useEffect(() => {
    getProCatBrands();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        New Product
      </Button>

      <Box sx={flexCenter} mt={3}>
        <MultiSelect
          setSelect={setSelectedOne}
          data={brands}
          placeholder={"Select Brands"}
        />
        <MultiSelect
          setSelect={setSelectedTwo}
          data={filteredTwo}
          placeholder={"Select Product"}
        />
      </Box>

      {sortedData?.length > 0 && (
        <ProductTable
          handleSort={handleSort}
          columns={columns}
          sortedData={sortedData}
          isBrandSelected={isOneSelected}
          isProductSelected={isTwoSelected}
        />
      )}
      <ProductModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />
    </Box>
  );
};

export default Products;
