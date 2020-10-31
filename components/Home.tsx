import React from "react";
import { Products } from "./Products";
import { Hero } from "./Hero";
export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
};
