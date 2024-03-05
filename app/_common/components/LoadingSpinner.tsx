import Lottie from "react-lottie-player";

import animation from "../assets/spinner-animation.json";

interface LoadingSpinnerProps {
  width?: string;
  height?: string;
  className?: string;
}

function LoadingSpinner({ width, height, className }: LoadingSpinnerProps) {
  return (
    <div className={className}>
      <Lottie
        play
        animationData={animation}
        speed={0.5}
        style={{ width, height }}
      />
    </div>
  );
}

export default LoadingSpinner;
