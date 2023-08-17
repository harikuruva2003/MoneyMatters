import * as React from "react";
import { IconsType } from "../../types/types";
const TransactionUpArrow = (props: IconsType) => {
  let { fill = "#718EBF" } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
      <circle
        cx={15}
        cy={15}
        r={14}
        stroke={fill}
        strokeWidth={2}
        transform="rotate(180 15 15)"
      />
      <path
        fill={fill}
        d="M15.53 8.47a.75.75 0 0 0-1.06 0l-4.773 4.773a.75.75 0 0 0 1.06 1.06L15 10.061l4.243 4.242a.75.75 0 0 0 1.06-1.06L15.53 8.47Zm.22 11.03V9h-1.5v10.5h1.5Z"
      />
    </svg>
  );
};
export default TransactionUpArrow;
