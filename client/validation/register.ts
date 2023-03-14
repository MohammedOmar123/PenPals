import { arabicRegister } from "@/utils/constants";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required(
    arabicRegister.validationMessages.requiredFirstName
  ),
  lastName: Yup.string().required(
    arabicRegister.validationMessages.requiredLastName
  ),
  email: Yup.string().required(arabicRegister.validationMessages.requiredEmail),
  password: Yup.string()
    .required(arabicRegister.validationMessages.requiredPassword)
    .min(6, arabicRegister.validationMessages.minLengthPassword),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), ""],
      arabicRegister.validationMessages.passwordNotMatch
    )
    .required(arabicRegister.validationMessages.requiredConfirmPassword),
});