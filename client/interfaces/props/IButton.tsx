import React, { HTMLProps } from "react";

export interface IButton extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}
