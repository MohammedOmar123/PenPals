// 'use client'
import { Formik, Form, FormikHelpers } from "formik";
import FormikControl from ".";
import Link from "next/link";
import { arabicRegister } from "@/utils/constants";
import { validationSchema } from "@/validation/register";
import { useRouter } from "next/navigation";
import { useRegister } from "@/hooks/auth.hook";
import Loading from "../Loading";
import classNames from "classnames";
import { IRegisterForm } from "@/interfaces/other/IRegisterFrom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const router = useRouter();
  const {
    mutateAsync: register,
    error,
    data,
    isError,
    isLoading,
  } = useRegister();

  const onSubmit = async (
    values: IRegisterForm,
    { setSubmitting }: FormikHelpers<IRegisterForm>
  ) => {
    await register(values, {
      onSuccess: (data) => {
        router.push("/wait-verified");
      },
      onSettled: () => {
        setSubmitting(false);
      },
    });
  };

  return (
    <>
      <div
        className={classNames(
          "w-[90%] md:w-[35rem] m-auto shadow-drop px-6 md:px-10 py-10 flex flex-col gap-8 rounded-md bg-custom-gray",
          {
            "parent-loading": isLoading,
          }
        )}
      >
        <h1 className="text-2xl font-bold text-primary text-center mb-4">
          {arabicRegister.newAccount}
        </h1>
        {isLoading && <Loading />}
        {isError && (
          <div className="text-danger">{error?.response?.data?.message}</div>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
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
                disabled={formik.isSubmitting}
              >
                {arabicRegister.register}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterForm;
