import { Badge } from "@ui5/webcomponents-react";

function getRandomInt(max){
     return Math.floor(Math.random() * max);
}

const BadgeCustom = (props) => {
  let color = 0;
  let status= props.status;

  switch (getRandomInt(4)) {
    case "0":
      color = 8;
      status = "Completed"
      break;
    case 1:
      color = 1;
      status = "In Progress"
      break;

    case 2:
      color = 6;
      status = "Not Started"
      break;

    case 3:
      color = 2;
      status = "Blocked"
      break;
  }

  return <Badge colorScheme={color}>{status}</Badge>;
};

export default BadgeCustom;
