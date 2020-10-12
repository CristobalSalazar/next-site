import { useEffect, useRef } from "react";

interface ScrollFadeOutProps {}
const ScrollFadeOut: React.FC<ScrollFadeOutProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const scrollHandler = () => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.opacity = Math.max(
      rect.bottom / rect.height,
      0
    ).toString();
  };

  return <div ref={ref}>{children}</div>;
};

export default ScrollFadeOut;
