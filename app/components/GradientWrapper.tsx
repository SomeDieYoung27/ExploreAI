"use client";

import React, { useState } from "react";

const GradientWrapper = ({
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      {...props}
      className={`relative overflow-hidden my-16 border-t sm:my-28 rounded-xl shadow-lg transition-all duration-300 ${
        isHovered ? "scale-[1.02]" : ""
      } ${props.className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(237, 78, 80, 0.1) 0%, rgba(237, 78, 80, 0) 50%),
            radial-gradient(circle at 80% 80%, rgba(152, 103, 240, 0.1) 0%, rgba(152, 103, 240, 0) 50%),
            linear-gradient(202.72deg, rgba(237, 78, 80, 0.05) 14.76%, rgba(152, 103, 240, 0.04) 34.37%, rgba(152, 103, 240, 0) 86.62%)
          `,
          opacity: isHovered ? 0.8 : 0.5,
        }}
      />
      <div className="absolute inset-0 w-full h-full opacity-20 bg-grid-pattern" />
      <div className="relative z-10 p-8">{children}</div>
      <div
        className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 ${
          isHovered ? "border-purple-300" : ""
        }`}
      />
    </div>
  );
};

export default GradientWrapper;
