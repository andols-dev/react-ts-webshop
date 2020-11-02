import React, { useState } from "react";
import { Link } from "react-router-dom";
export const NewsBanner: React.FC = () => {
  const [isBannerShown, setIsBannerShown] = useState(true);
  const hideBanner = () => {
    setIsBannerShown(prevState => !prevState);
  };
  return (
    <div>
      {isBannerShown && (
        <div className="bg-green-600 px-6 py-4 flex  justify-center text-white relative  ">
          <div className="mr-10">
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
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </div>
          <h1>Upcoming products 2021</h1>
          <Link to="/upcoming" className="ml-10">
            Read more
          </Link>

          <div
            className="cursor-pointer"
            style={{ position: "absolute", right: "20px" }}
          >
            <span onClick={hideBanner}>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
