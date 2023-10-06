import { Label } from "@ui5/webcomponents-react";
import TableCustom from "./Components/TableCustom";

const tableData = [
  {
    id: 1,
    title: "Week 1: Create a Table>",
    status: "Completed",
  },
  {
    id: 2,
    title: "Week 2: Craft a Custom Component",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Week 3: Implement Infinite Scroll",
    status: "Not Started",
  },
  {
    id: 4,
    title: "Week 4: Add New Rows",
    status: "Blocked",
  },
];

function Solution() {
  return (
    <>
      <Label>Display table below</Label>
      <TableCustom data={tableData} />
    </>
  );
}

export default Solution;
