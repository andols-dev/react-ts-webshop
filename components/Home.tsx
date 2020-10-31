import React from "react";
import { Products } from "./Products";
import { Hero } from "./Hero";
import { Newsletter } from "./Newsletter";
export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Newsletter />
    </div>
  );
};
