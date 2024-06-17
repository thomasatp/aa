"use client";

export default function Load({ className }: { className: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 12a9 9 0 1 1-6.219-8.56"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
