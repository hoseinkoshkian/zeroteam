import React, { ReactNode } from "react";
// import React from "@types/react"
type ButtonStyles =
  | "btn-z-blue"
  | "btn-z-yellow"
  | "btn-z-outline-blue"
  | "btn-z-outline-yellow"
  | "btn-z-bg-gray";
type ButtonSizes = "sm" | "base";
interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  text: string;
  styles: ButtonStyles;
  size: ButtonSizes;
  className?: string;
}
export default function Button({
  text,
  styles,
  className,
  size = "base",
  ...props
}: ButtonProps) {
  return (
    <button className={`text-${size} ${styles} ${className}`} {...props}>
      {text}
    </button>
  );
}
