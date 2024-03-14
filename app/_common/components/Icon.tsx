import React from "react";

interface IconProps {
  id: string;
  size?: number | string;
}

function Icon(props: React.SVGProps<SVGSVGElement> & IconProps) {
  const { id, size = "100%", ...rest } = props;
  return (
    <svg width={size} height={size} {...rest}>
      <use href={`#${id}`} />
    </svg>
  );
}

export default Icon;
