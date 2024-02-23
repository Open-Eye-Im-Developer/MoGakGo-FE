import { useState } from "react";

function useFlip() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return { flipped, handleFlip };
}

export default useFlip;
