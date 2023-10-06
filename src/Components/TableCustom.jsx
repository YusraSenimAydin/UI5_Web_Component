import { useState, useRef, useEffect } from "react";
import {
  AnalyticalTable,
  Toolbar,
  ToolbarSpacer,
  Icon,
} from "@ui5/webcomponents-react";
import BadgeCustom from "./BadgeCustom";
import AddRowDialog from "./AddRowDialog";
import "@ui5/webcomponents-icons/dist/delete.js";

const TableCustom = (props) => {
  const [data, setData] = useState(props.data.slice(0, 10));
  const [loading, setLoading] = useState(false);
  const offset = useRef(10);
  const onLoadMore = () => {
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        const data = props.data.slice(offset.current, offset.current + 5);
        setData((prev) => [...prev, ...data]);

        setLoading(false);
        offset.current += data.length;
      }, 2000);
    }
  }, [loading, props.data, offset.current]);
  const deleteHandler = (row) => {
    props.onDelete(row.original.id);
    offset.current -= 1;
    setData((prevData) => {
      const updateData = prevData.filter(
        (value) => value.id !== row.original.id
      );
      return updateData;
    });
  };

  return (
    <>
      <Toolbar design="Auto" toolbarStyle="Standard">
        <ToolbarSpacer />
        <AddRowDialog addNewRow={props.onAdd} />
      </Toolbar>
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
          {
            accessor: ".",
            Cell: ({ row }) => (
              <Icon name="delete" onClick={() => deleteHandler(row)} />
            ),
          },
        ]}
        data={data}
        selectionMode="None"
        visibleRowCountMode="Fixed"
        visibleRows="5"
        infiniteScrollThreshold={5}
        infiniteScroll={true}
        onLoadMore={onLoadMore}
        loading={loading}
      />
    </>
  );
};

export default TableCustom;
