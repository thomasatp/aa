"use client";

import { createContext, useContext, useState } from "react";

type GridType = boolean | string;

export const GridContext = createContext<any>({});

export function GridProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [visible, setVisible] = useState<GridType>(false);

  const toggle = () => {
    setVisible(!visible)
  }

  return (
    <GridContext.Provider value={{visible, toggle }}>
      {children}
    </GridContext.Provider>
  );
}

export const useGrid = () => useContext(GridContext);
