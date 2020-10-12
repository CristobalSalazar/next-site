import { useEffect, useRef } from "react";
import useScroll from "../hooks/useScroll";

interface ScrollFadeOutProps {}
const ScrollFadeIn: React.FC<ScrollFadeOutProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useScroll((_) => {
    const rect = ref.current.getBoundingClientRect();
    const opacity = Math.max(1 - rect.top / rect.height, 0);

    ref.current.style.opacity = opacity.toString();
  });

  return <div ref={ref}>{children}</div>;
};

export default ScrollFadeIn;
