import { useEffect, useRef } from "react";

interface ScrollFadeOutProps {
  className?: string;
  factor?: number;
}
const ScrollFadeIn: React.FC<ScrollFadeOutProps> = ({
  children,
  className,
  factor = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function handleScroll() {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.opacity = (
      1 -
      Math.max(rect.top / rect.height, 0) / factor
    ).toString();
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
