import { useState } from "react";

const useMultiSelect = (products, oneSelect, twoSelect) => {
  const [selectedOne, setSelectedOne] = useState([]);
  const [selectedTwo, setSelectedTwo] = useState([]);

  const isOneSelected = (item) =>
    selectedOne?.includes(item[oneSelect]) || selectedOne?.length === 0;

  const filteredTwo = products?.filter(
    (item) =>
      selectedOne?.includes(item[oneSelect]) || selectedOne?.length === 0
  );
  const isTwoSelected = (item) =>
    selectedTwo?.includes(item[twoSelect]) || selectedTwo?.length === 0;

  return {
    setSelectedOne,
    setSelectedTwo,
    isOneSelected,
    isTwoSelected,
    filteredTwo,
  };
};

export default useMultiSelect;
