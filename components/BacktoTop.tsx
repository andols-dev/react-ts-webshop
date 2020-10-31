import React from "react";

export const BacktoTop: React.FC = () => {
  return (
    <div className="cursor-pointer border-solid border-4 border-gray-600 p-2 w-12">
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </div>
  );
};
