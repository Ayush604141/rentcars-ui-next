"use client";
import { ButtonProps } from "@/types";

const Button = ({
  title,
  containerStyle,
  handleClick,
  buttonType,
}: ButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyle}`}
      type={buttonType || "button"}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
