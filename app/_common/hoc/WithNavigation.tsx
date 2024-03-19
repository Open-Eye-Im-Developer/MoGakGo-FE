/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */

import NavigationBottom from "../components/NavigationBottom";

function WithNavigation<P extends object>(
  Component: React.ComponentType<P>,
  isShowNavigation: boolean = false,
) {
  return function IsNavigated(props: P) {
    if (isShowNavigation) {
      return (
        <>
          <NavigationBottom />
          <Component {...props} />
        </>
      );
    }

    return <Component {...props} />;
  };
}

export default WithNavigation;
