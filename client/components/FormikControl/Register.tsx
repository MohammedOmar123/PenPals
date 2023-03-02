import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from ".";
import Link from "next/link";
import { arabicRegister } from "@/utils/constants";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
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

const onSubmit = (values: any) => {
  console.log("Form data", values);
};

const RegisterForm = () => {
  return (
    <div className="w-[90%] md:w-[35rem] m-auto shadow-drop px-6 md:px-10 py-10 flex flex-col gap-8 md:gap-14 rounded-md bg-custom-gray">
      <h1 className="text-2xl font-bold text-primary text-center mb-4">
        تسجيل حساب جديد
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormikControl
                control="input"
                type="text"
                name="firstName"
                placeholder={arabicRegister.firstName}
              />
              <FormikControl
                control="input"
                type="text"
                name="lastName"
                placeholder={arabicRegister.lastName}
              />
            </div>
            <FormikControl
              control="input"
              type="email"
              name="email"
              placeholder={arabicRegister.email}
            />
            <FormikControl
              control="input"
              type="password"
              name="password"
              placeholder={arabicRegister.password}
            />
            <FormikControl
              control="input"
              type="password"
              name="confirmPassword"
              placeholder={arabicRegister.confirmPassword}
            />
            <div className="flex text-sm mt-5">
              <p className="text-light-primary">
                {arabicRegister.alreadyHaveAccount}
              </p>
              <Link href="/login" className="text-primary mr-1">
                {arabicRegister.login}
              </Link>
            </div>
            <button
              type="submit"
              className=" text-primary w-fit py-2 px-4 rounded-lg shadow-drop"
            >
              {arabicRegister.register}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
