import { Badge } from "@ui5/webcomponents-react";

const BadgeCustom = (props) => {
  let color = 0;

  switch (props.status) {
    case "Completed":
      color = 8;
      break;
    case "In Progress":
      color = 1;
      break;

    case "Not Started":
      color = 6;
      break;

    case "Blocked":
      color = 2;
      break;
  }

  return <Badge colorScheme={color}>{props.status}</Badge>;
};

export default BadgeCustom;
