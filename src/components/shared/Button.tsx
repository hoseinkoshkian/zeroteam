type ButtonStyles =
  | "btn-z-blue"
  | "btn-z-yellow"
  | "btn-z-outline-blue"
  | "btn-z-outline-yellow";
interface ButtonProps {
  text: string;
  style: ButtonStyles;
  className?: string;
}
export default function Button({
  text,
  style,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={`${style} ${className}`} {...props}>
      {text}
    </button>
  );
}
