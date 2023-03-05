import { Formik, Form } from "formik";
import FormikControl from ".";
import Link from "next/link";
import { arabicRegister } from "@/utils/constants";
import { validationSchema } from "@/validation/register";
import ApiService from "@/services/ApiService";
import { endpoints } from "@/utils/endpoints";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { AxiosError } from "axios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
interface IRegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signup = async (values: IRegisterForm) => {
  const { confirmPassword, ...rest } = values;
  const { data } = await ApiService.post(endpoints.register, rest);
  return data;
};

const RegisterForm = () => {
  const { mutateAsync, data, isError, error, isLoading } = useMutation<
    any,
    AxiosError<{ message: string }>,
    any
  >({
    mutationFn: signup,
  });

  const onSubmit = async (values: IRegisterForm) => {
    await mutateAsync(values);
  };

  useEffect(() => {
    console.log(error, "error");
    console.log(data, "data");
    if (data) {
      console.log(data);
    }
    if (isError) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <>
      <div className="w-[90%] md:w-[35rem] m-auto shadow-drop px-6 md:px-10 py-10 flex flex-col gap-8 rounded-md bg-custom-gray">
        <h1 className="text-2xl font-bold text-primary text-center mb-4">
          {arabicRegister.newAccount}
        </h1>
        {isLoading && <div>Loading...</div>}
        {isError && (
          <div className="text-danger">{error?.response?.data?.message}</div>
        )}
        {data && <div className="text-success">{data?.message}</div>}
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
    </>
  );
};

export default RegisterForm;
