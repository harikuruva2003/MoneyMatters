import * as React from "react";
const TransactionDownArrow = (props) => {
  const { color = "#718EBF" } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      {...props}
    >
      <circle
        cx={15}
        cy={15}
        r={14}
        stroke={color}
        strokeWidth={2}
        transform="rotate(180 15 15)"
      />
      <path
        fill={color}
        d="M14.47 20.03a.75.75 0 0 0 1.06 0l4.773-4.773a.75.75 0 0 0-1.06-1.06L15 18.439l-4.243-4.242a.75.75 0 0 0-1.06 1.06l4.773 4.773ZM14.25 9v10.5h1.5V9h-1.5Z"
      />
    </svg>
  );
};
export default TransactionDownArrow;
