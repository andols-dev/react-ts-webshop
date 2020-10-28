import React, { useState } from "react";
import { products } from "./products";

export const ProductsContext = React.createContext(products);
type Props = {
  children: React.ReactNode;
};

export const ProductsContextProvider = ({ children }: Props) => {
  // eslint-disable-next-line
  const [product, setProduct] = useState(products);
  return (
    <ProductsContext.Provider value={product}>
      {children}
    </ProductsContext.Provider>
  );
};
