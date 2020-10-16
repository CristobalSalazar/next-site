import { ButtonHTMLAttributes } from "react";

type Props = React.DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button: React.FC<Props> = ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={`rounded-l-full rounded-r-full px-3 py-2 transition-colors duration-200 hover:shadow-md border outline-none border-accent text-accent hover:bg-accent hover:text-light ${className}`}
  >
    {children}
  </button>
);
export default Button;
