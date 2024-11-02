import { cva, VariantProps } from "class-variance-authority";
import { ElProps } from "src/types/types";
interface ButtonProps extends VariantProps<typeof buttonStyles>, ElProps {
  text: string;
}
const buttonStyles = cva("px-5 py-2 text-white rounded-lg", {
  variants: {
    intent: {
      blue: "bg-z-blue",
      yellow: "bg-z-yellow",
      outlineB: "bg-white border-2 border-z-blue text-z-blue font-bold",
      outlineY: "bg-white border-2 border-z-yellow text-z-yellow font-bold",
    },
    defaultVariants: {
      intent: "bg-z-blue",
    },
  },
});
export default function Button({ intent, text, extra, ...props }: ButtonProps) {
  // const outline =
  //   buttonStyles({ intent }) == "outline" ? (
  //     <button className={`${buttonStyles({ intent })} ${extra}`} {...props}>
  //       {text}
  //     </button>
  //   ) : (
  //     <button className={`${buttonStyles({ intent })} ${extra}`} {...props}>
  //       {text}
  //     </button>
  //   );
  return (
    <button className={`${buttonStyles({ intent })} ${extra}`} {...props}>
      {text}
    </button>
  );
}
