import React from "react";

import { useSearchTokens } from "../hooks/useSearchTokens";

const WithSearchTokens = (WrappedComponent: React.ComponentType) => {
  const WithSearchTokens = () => {
    useSearchTokens("local");

    return <WrappedComponent />;
  };

  WithSearchTokens.displayName = `WithSearchTokens`;

  return WithSearchTokens;
};

export default WithSearchTokens;
