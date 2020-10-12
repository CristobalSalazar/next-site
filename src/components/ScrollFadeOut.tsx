import { useRef } from "react";
import useScroll from "../hooks/useScroll";

interface ScrollFadeOutProps {}
const ScrollFadeOut: React.FC<ScrollFadeOutProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useScroll((e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.opacity = Math.max(
      rect.bottom / rect.height,
      0
    ).toString();
  });

  return <div ref={ref}>{children}</div>;
};

export default ScrollFadeOut;
