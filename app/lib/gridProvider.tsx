"use client";

import { createContext, useContext, useState } from "react";

type GridType = boolean | string;

export const GridContext = createContext<any>(null);

export function GridProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    typeof window !== "undefined" && localStorage.getItem("visible");

  const [visible, setVisible] = useState<GridType>(false);


  const toggle = () => {
    setVisible(!visible)
  }

  return (
    <GridContext.Provider value={{ visible, toggle }}>
      {children}
    </GridContext.Provider>
  );
}

export const useGrid = () => useContext(GridContext);
