"use client";
import React, { useState, useEffect } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [linkHoverWord, setLinkHoverWord] = useState(false);

  const mDown = () => {
    setClick(true);
  };

  const mUp = () => {
    setClick(false);
  };

  const mMove = (el: MouseEvent) => {
    setPosition({ x: el.clientX, y: el.clientY });
  };

  const mLeave = () => {
    setHidden(true);
  };

  const mEnter = () => {
    setHidden(false);
  };

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    

    const addLinkEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  });

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