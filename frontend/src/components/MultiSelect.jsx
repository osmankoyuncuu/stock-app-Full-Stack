import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";

const MultiSelect = ({ setSelect, data, placeholder }) => {
  return (
    <MultiSelectBox
      handleSelect={(value) => setSelect(value)}
      placeholder={placeholder}
      fullWidth
    >
      {data?.map((item) => (
        <MultiSelectBoxItem
          key={item.name}
          value={item.name}
          text={item.name}
        />
      ))}
    </MultiSelectBox>
  );
};

export default MultiSelect;
