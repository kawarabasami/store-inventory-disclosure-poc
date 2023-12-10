"use client";

import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React from "react";

const IconifyWrapper: React.FC<{
  className?: string;
  containerClassName?: string;
  icon: string;
  size?: string;
  color?: string;
  bgColor?: string;
}> = ({
  className,
  containerClassName = "",
  icon,
  size = "1rem",
  color,
  bgColor,
}) => {
  return (
    <div
      className={`flex justify-center items-center ${containerClassName}`}
      style={{ width: size, height: size, backgroundColor: bgColor }}
    >
      <Icon
        icon={icon}
        className={className}
        style={{ fontSize: size, color }}
      />
    </div>
  );
};

export default IconifyWrapper;
