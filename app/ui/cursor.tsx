"use client";
import React, { useState, useEffect } from "react";
import { useMouseMove } from "../hooks/useMouseMove";

function Cursor() {
  const {position, hidden, click, linkHover} = useMouseMove()

  return (
    <div
      className={`cursor ${hidden ? "c--hidden" : ""} ${
        linkHover ? "c--hover" : ""
      } ${click ? "c--click" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

export default Cursor;