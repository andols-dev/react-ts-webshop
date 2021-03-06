import React from "react";

export const BacktoTop: React.FC = () => {
  return (
    <div className="hidden cursor-pointer border-solid border-4 border-gray-600 p-2 w-12 rounded-lg fixed right-0 mr-10 bottom-0 mb-40">
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
