"use client";

import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React from "react";

const IconifyWrapper: React.FC<{
  className?: string;
  icon: string;
  size?: string;
}> = ({ className, icon, size = "1rem" }) => {
  return (
    <div className={className}>
      <Icon icon={icon} style={{ fontSize: size }} />
    </div>
  );
};

export default IconifyWrapper;
