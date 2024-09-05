"use client";
import React, { useState, useEffect } from "react";
import { useMouseMove } from "../../src/hooks/useMouseMove";
import clsx from "clsx";
import { ChevronsLeftRight } from "lucide-react";

function Cursor1() {
  const { position, hidden, click, linkHover, sliderHover } = useMouseMove();

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

function Cursor() {
  const { position, hidden, click, linkHover, sliderHover } = useMouseMove();

  return (
    <div
      className={clsx("cursor", {
        "c--hidden mix-blend-difference": hidden,
        "c--hover mix-blend-difference": linkHover,
        "c--click mix-blend-difference": click,
      })}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <ChevronsLeftRight
        strokeWidth={1}
        size={32}
        className={clsx(
          "z-50 mix-blend-difference opacity-0 transition-opacity duration-300",
          {
            "opacity-100": sliderHover,
          }
        )}
        color="white"
      />
    </div>
  );
}

export default Cursor;
