import { useState , useRef, useEffect} from "react";
import { AnalyticalTable } from "@ui5/webcomponents-react";
import BadgeCustom from "./BadgeCustom";

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
				setData((prev) => [
					...prev,
					...props.data.slice(offset.current, offset.current + 5),
				]);
				setLoading(false);
				offset.current += 5;
			}, 2000);
		}
	}, [loading, props.data, offset.current]);

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
      data={data}
			selectionMode="None"
			visibleRowCountMode="Fixed"
			visibleRows="5"
			infiniteScrollThreshold={5}
			infiniteScroll={true}
			onLoadMore={onLoadMore}
			loading={loading}

    />
  );
};

export default TableCustom;
