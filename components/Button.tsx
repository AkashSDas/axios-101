import { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
