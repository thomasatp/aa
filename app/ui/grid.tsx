"use client";
import { useGrid } from "../lib/gridProvider";

export default function Grid() {
  const { visible } = useGrid();

  const grid = 12;
  const gridTable = [];
  while (gridTable.length < grid) {
    gridTable.push("col");
  }
  return (
    <div style={{opacity: visible ? '1' : '0'}}
      className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-6 gap-y-0 px-6 fixed top-0 bottom-0 w-full z-0`}
    >
      {gridTable.map((gr, i) => (
        <div
          key={`${i}_${gr}`}
          className="border-x  border-stone-800 h-full"
        ></div>
      ))}
    </div>
  );
}
