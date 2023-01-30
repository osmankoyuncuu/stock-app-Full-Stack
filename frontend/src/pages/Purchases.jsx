import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import useSortColumn from "../hooks/useSortColumn";
import { flexCenter } from "../styles/globalStyle";
import MultiSelect from "../components/MultiSelect";
import useMultiSelect from "../hooks/useMultiSelect";
import PurchasesModal from "../components/Modals/PurchasesModal";
import PurchasesTable from "../components/Table/PurchasesTable";

const Purchases = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    firm_id: "",
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  });
  const { products, brands, purchases } = useSelector((state) => state.stock);
  const { getProCatBrands, getStockData } = useStockCalls();
  const columnObj = {
    date: 1,
    firm: 1,
    brand: 1,
    product: 1,
    quantity: 1,
    price: 1,
    price_total: 1,
  };
  const { sortedData, handleSort, columns } = useSortColumn(
    purchases,
    columnObj
  );
  const {
    setSelectedOne,
    setSelectedTwo,
    isOneSelected,
    isTwoSelected,
    filteredTwo,
  } = useMultiSelect(products, "brand", "product");

  useEffect(() => {
    getStockData("purchases");
    getStockData("firms");
    getProCatBrands();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={3}>
        Purchases
      </Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        New Purchases
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
        <PurchasesTable
          handleSort={handleSort}
          columns={columns}
          sortedData={sortedData}
          isBrandSelected={isOneSelected}
          isProductSelected={isTwoSelected}
          setOpen={setOpen}
          setInfo={setInfo}
        />
      )}
      <PurchasesModal
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />
    </Box>
  );
};

export default Purchases;
