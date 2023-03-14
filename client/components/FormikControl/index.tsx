import React from "react";
import Input, { IInputProps } from "./Input";

interface IFormikControlProps extends IInputProps {
  control: string;
}
function FormikControl({ control, ...rest }: IFormikControlProps) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
