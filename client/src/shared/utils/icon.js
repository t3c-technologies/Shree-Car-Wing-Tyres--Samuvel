import { Icon } from "@iconify-icon/react";

export const AppIcon = ({ icon, size, className = "", ...props }) => {
  // If size is provided, use it for width/height, otherwise rely on className for responsive sizing
  const iconProps = size ? { width: size, height: size } : {};

  return (
    <Icon
      icon={icon}
      {...iconProps}
      className={`flex justify-center items-center ${className}`}
      {...props}
    />
  );
};
