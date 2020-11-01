import { HTMLAttributes, useRef } from "react";
import useScroll from "../hooks/useScroll";

type DivProps = React.DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
interface ScrollFadeOutProps extends DivProps {}
const ScrollFadeOut: React.FC<ScrollFadeOutProps> = ({ children, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);

  useScroll((e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.opacity = Math.max(
      rect.bottom / rect.height,
      0
    ).toString();
  });

  return (
    <div {...rest} ref={ref}>
      {children}
    </div>
  );
};

export default ScrollFadeOut;
