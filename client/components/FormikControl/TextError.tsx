import React, { FC } from "react";
import classNames from "classnames";

interface ITextErrorProps {
  children: React.ReactNode;
  className?: string;
}
const TextError: FC<ITextErrorProps> = ({ children, className }) => {
  return <p className={classNames("text-danger text-[0.8rem]", className)}>{children}</p>;
};

export default TextError;
