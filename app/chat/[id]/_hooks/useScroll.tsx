import { useRef, useState } from "react";

export type ScrollUpperType = "LOW" | "HIGH" | false;

export const useScroll = () => {
  let timer: NodeJS.Timeout | null;
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isScrollUpper, setIsScrollUpper] = useState<ScrollUpperType>(false);

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
    });
    setIsScrollUpper(false);
  };

  const handleScroll = () => {
    if (timer) return;

    timer = setTimeout(() => {
      if (!scrollRef.current) return;
      timer = null;
      const { scrollTop, scrollHeight } = scrollRef.current;

      if (scrollHeight - scrollTop > 1200) setIsScrollUpper("HIGH");
      else if (scrollHeight - scrollTop > 400) setIsScrollUpper("LOW");
      else setIsScrollUpper(false);
    }, 300);
  };

  return { scrollRef, scrollToBottom, handleScroll, isScrollUpper };
};
