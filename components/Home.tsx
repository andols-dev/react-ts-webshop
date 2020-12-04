import React from "react";
import { Products } from "./Products";
import { Hero } from "./Hero";
import { Newsletter } from "./Newsletter";
import { NewsBanner } from "./NewsBanner";
import Seo from "./Seo";
export const Home: React.FC = () => {
  return (
    <div>
      <Seo title="Home"/>
      <NewsBanner />
      <Hero />
      <Products />
      <Newsletter />
    </div>
  );
};
