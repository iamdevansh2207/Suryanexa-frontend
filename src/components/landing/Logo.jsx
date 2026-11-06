"use client";
const LogoMark = ({ size = 34 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="64" height="64" rx="14" fill="#0B2410" stroke="#2E7D32" strokeOpacity="0.5" />
    <path d="M32 16 L44 28 L20 28 Z" fill="#2E7D32" />
    <path d="M20 32 L44 32 L32 44 Z" fill="#FBC02D" />
    <circle cx="32" cy="30" r="3" fill="#1DE9B6" />
  </svg>
);

export default LogoMark;
