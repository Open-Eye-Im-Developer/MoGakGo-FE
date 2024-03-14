import React from "react";

interface IconProps {
  id: string;
  width?: number | string;
  height?: number;
}

function Icon(props: React.SVGProps<SVGSVGElement> & IconProps) {
  const { id, width = "100%", height = "100%", ...rest } = props;
  return (
    <svg width={width} height={height} {...rest}>
      <use href={`#${id}`} />
    </svg>
  );
}

export default Icon;
