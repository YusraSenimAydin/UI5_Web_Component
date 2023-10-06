import { Label } from "@ui5/webcomponents-react";
import TableCustom from "./Components/TableCustom";
import { fullTableData } from "./utils/data";

function Solution() {
  return (
    <>
      <Label>Display table below</Label>
      <TableCustom data={fullTableData} />
    </>
  );
}

export default Solution;
