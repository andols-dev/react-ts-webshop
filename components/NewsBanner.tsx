import React, { useState } from "react";

export const NewsBanner: React.FC = () => {
  const [isBannerShown, setIsBannerShown] = useState(true);
  const hideBanner = () => {
    setIsBannerShown(prevState => !prevState);
  };
  return (
    <div>
      {isBannerShown && (
        <div>
          newsbanner will be here <span onClick={hideBanner}>close banner</span>
        </div>
      )}
    </div>
  );
};
