import { useState } from "react";
import {
  TableRow,
  TableCell,
  Label,
  Table,
  TableGrowingMode,
  TableColumn,
} from "@ui5/webcomponents-react";

const TableCustom = (props) => {
  const rows = props.data.map((d) => {
    return (
      <TableRow key={d.id}>
        <TableCell>
          <Label>{d.id}</Label>
        </TableCell>
        <TableCell>
          <Label>{d.title}</Label>
        </TableCell>
        <TableCell>
          <Label>{d.status}</Label>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Table
      columns={
        <>
          <TableColumn>
            <Label>ID</Label>
          </TableColumn>
          <TableColumn>
            <Label>Title</Label>
          </TableColumn>
          <TableColumn>
            <Label>Status</Label>
          </TableColumn>
        </>
      }
    >
      {rows}
    </Table>
  );
};

export default TableCustom;
