import React from "react";
import { Field, ErrorMessage } from "formik";
import classNames from "classnames";
import TextError from "./TextError";

export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorMessageClassName?: string;
  name: string;
}
const Input = ({
  containerClassName,
  labelClassName,
  errorMessageClassName,
  className,
  id,
  label,
  name,
  ...rest
}: IInputProps) => {
  return (
    <div className={classNames("", containerClassName)}>
      {label && (
        <label className={classNames(labelClassName)} htmlFor={id}>
          {label}
        </label>
      )}
      <Field id={id} name={name} className={classNames("shadow-inner px-4 py-2 w-full rounded-lg placeholder:text-light-primary outline-none",className)} {...rest} />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <TextError className={classNames(errorMessageClassName)}>
            {msg}
          </TextError>
        )}
      />
    </div>
  );
};

export default Input;
