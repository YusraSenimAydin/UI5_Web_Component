import { Label } from "@ui5/webcomponents-react";
import TableCustom from "./Components/TableCustom";
import { fullTableData } from "./utils/data";
import { useState } from "react";

function Solution() {
  const [data, setData] = useState(fullTableData);

  const addRow = (row) => {
    row.id = Math.floor(Math.random() * 999999);
    setData((prevData) => {
      return [...prevData, row];
    });
  };

  const deleteRow = (id) => {
    setData((prevData) => {
      const updateData = prevData.filter((value) => value.id !== id);
      return updateData;
    });
  };

  return (
    <>
      <Label>Display table below</Label>
      <TableCustom data={data} onAdd={addRow} onDelete={deleteRow} />
    </>
  );
}

export default Solution;
