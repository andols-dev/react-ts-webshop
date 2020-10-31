import React from "react";
import { Products } from "./Products";
import { Hero } from "./Hero";
import { Newsletter } from "./Newsletter";
import { NewsBanner } from "./NewsBanner";
export const Home: React.FC = () => {
  return (
    <div>
      <NewsBanner />
      <Hero />
      <Products />
      <Newsletter />
    </div>
  );
};
