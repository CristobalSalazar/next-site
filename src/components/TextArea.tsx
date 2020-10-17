import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

type DefaultTextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
interface TextAreaProps extends DefaultTextAreaProps {}
const TextArea: React.FC<TextAreaProps> = ({
  children,
  className,
  ...rest
}) => (
  <textarea
    className={`block w-full px-3 py-2 mb-3 border rounded-lg shadow outline-none bg-light text-dark focus:border-primary ${className}`}
    {...rest}
  >
    {children}
  </textarea>
);
export default TextArea;
