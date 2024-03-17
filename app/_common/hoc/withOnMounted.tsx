import { ComponentType, useEffect, useState } from "react";

function WithOnMounted<P extends object>(Component: ComponentType<P>) {
  return function Mount(props: P) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      if (typeof window === "undefined") return;

      setIsMounted(true);
    }, []);

    return isMounted && <Component {...props} />;
  };
}

export default WithOnMounted;
