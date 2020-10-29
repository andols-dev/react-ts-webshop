import React from "react";

export const Nav: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-900">
      <div className=" w-4/5 pt-2 pb-2 flex justify-between items-center">
        <div className="text-white">
          <p>WebShop</p>
        </div>
        <div className="text-white ">
          <svg
            className="w-6 h-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
