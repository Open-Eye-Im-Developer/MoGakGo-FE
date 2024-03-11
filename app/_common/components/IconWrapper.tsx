import * as React from "react";

interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactElement;
}

function IconWrapper(props: IconWrapperProps) {
  const { children, ...rest } = props;

  const childrenWithProps = React.cloneElement(children, rest);

  return childrenWithProps;
}

export default IconWrapper;
