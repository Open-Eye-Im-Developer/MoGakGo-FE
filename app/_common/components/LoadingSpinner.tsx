import Lottie from "react-lottie-player";

import animation from "../assets/spinner-animation.json";

interface LoadingSpinnerProps {
  width?: string;
  height?: string;
}

function LoadingSpinner({ width, height }: LoadingSpinnerProps) {
  return (
    <Lottie
      play
      animationData={animation}
      speed={0.5}
      style={{ width, height }}
    />
  );
}

export default LoadingSpinner;
