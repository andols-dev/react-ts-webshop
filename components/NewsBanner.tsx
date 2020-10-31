import React, { useState } from "react";

export const NewsBanner: React.FC = () => {
  const [isBannerShown, setIsBannerShown] = useState(true);
  const hideBanner = () => {
    setIsBannerShown(prevState => !prevState);
  };
  return (
    <div>
      {isBannerShown && (
        <div className="bg-blue-400 px-6 py-4 text-center text-white ">
          newsbanner will be here <span onClick={hideBanner}>close banner</span>
        </div>
      )}
    </div>
  );
};
