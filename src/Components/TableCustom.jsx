import { useState } from "react";
import { AnalyticalTable } from "@ui5/webcomponents-react";
import BadgeCustom from "./BadgeCustom";

const TableCustom = (props) => {
  return (
    <AnalyticalTable
      columns={[
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Title",
          accessor: "title",
        },
        {
          Header: "Status",
          accessor: "status",
          Cell: ({ cell }) => <BadgeCustom status={cell.value} />,
        },
      ]}
      data={props.data}
      selectionMode="None"
    />
  );
};

export default TableCustom;
