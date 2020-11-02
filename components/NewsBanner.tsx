import React, { useState } from "react";

export const NewsBanner: React.FC = () => {
  const [isBannerShown, setIsBannerShown] = useState(true);
  const hideBanner = () => {
    setIsBannerShown(prevState => !prevState);
  };
  return (
    <div>
      {isBannerShown && (
        <div className="bg-green-600 px-6 py-4 flex  justify-center text-white relative ">
          <h1> Upcoming products in december</h1>
          <span className="ml-5">Read more</span>
          <div style={{ position: "absolute", right: "20px" }}>
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
