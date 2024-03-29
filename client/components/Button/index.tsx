import { FC } from "react";
import classNames from "classnames";
import { IButton } from "@/interfaces/props/IButton";

const Button: FC<IButton> = ({ children, className, type, ...rest }) => {
  return (
    <button
      {...rest}
      type={type || "button"}
      className={classNames(
        `px-6 py-2 font-medium tracking-wide mx-2
            transition-colors duration-300 transform rounded-lg`,
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
