
import React from 'react';

const TreeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="currentColor"
    {...props}
  >
    <path
      fill="#8B5A2B"
      d="M 45,95 L 45,70 L 55,70 L 55,95 Z" 
    />
    <circle cx="50" cy="40" r="30" />
    <circle cx="35" cy="55" r="20" />
    <circle cx="65" cy="55" r="20" />
  </svg>
);

export default TreeIcon;
