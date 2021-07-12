import React from "react";

const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70px"
      height="70px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="44"
        strokeWidth="2"
        stroke="#9d9aca"
        strokeDasharray="69.11503837897544 69.11503837897544"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.7407407407407407s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default Spinner;
