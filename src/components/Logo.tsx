import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={className}
    >
      <circle cx="20" cy="20" r="19" fill="#fff" stroke="#b3202a" strokeWidth="2" />
      <clipPath id="c">
        <circle cx="20" cy="20" r="17" />
      </clipPath>
      <g clipPath="url(#c)">
        <path d="M-4 30L30-4h6L2 36zM6 40L40 6v6L12 40z" fill="#b3202a" />
        <path d="M4 40L40 4v6L10 40z" fill="#142544" />
      </g>
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fontFamily="Impact,Arial Narrow,sans-serif"
        fontSize="14"
        fill="#0e1626"
        stroke="#fff"
        strokeWidth="3"
        paintOrder="stroke"
      >
        S&amp;S
      </text>
    </svg>
  );
}
