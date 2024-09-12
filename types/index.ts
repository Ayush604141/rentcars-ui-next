import { MouseEventHandler } from "react";

export type ButtonProps = {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType?: "button" | "submit";
};
