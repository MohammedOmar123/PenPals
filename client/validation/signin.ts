import { arabicSignin } from "@/utils/constants";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().required(arabicSignin.validationMessages.requiredEmail),
  password: Yup.string().required(
    arabicSignin.validationMessages.requiredPassword
  ),
});
