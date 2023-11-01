"use client";

import { Icon } from "@iconify-icon/react/dist/iconify.js";
import React from "react";

const IconifyWrapper: React.FC<{
  className?: string;
  icon: string;
  size?: string;
}> = ({ className, icon, size = "1rem" }) => {
  return (
    <>
      <Icon icon={icon} className={className} style={{ fontSize: size }} />
    </>
  );
};

export default IconifyWrapper;
