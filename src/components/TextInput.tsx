import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
interface TextInputProps extends InputProps {}
const TextInput: React.FC<TextInputProps> = ({ children, ...rest }) => (
  <input
    {...rest}
    className="block w-full px-3 py-2 border rounded-lg shadow outline-none bg-light text-dark focus:border-primary"
  >
    {children}
  </input>
);
export default TextInput;
