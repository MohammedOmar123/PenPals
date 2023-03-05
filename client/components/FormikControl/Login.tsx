"use client";
import { Formik, Form } from "formik";
import FormikControl from ".";
import Link from "next/link";
import { arabicSignin } from "@/utils/constants";
import { validationSchema } from "@/validation/signin";
import ApiService from "@/services/ApiService";
import { endpoints } from "@/utils/endpoints";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};
interface ISigninForm {
  email: string;
  password: string;
}

const signin = async (values: ISigninForm) => {
  const { data } = await ApiService.post(endpoints.signin, values);
  return data;
};

const SigninForm = () => {
  const router = useRouter();
  const { mutateAsync, data, isError, error, isLoading } = useMutation<
    any,
    AxiosError<{ message: string }>,
    any
  >({
    mutationFn: signin,
  });

  const onSubmit = async (values: ISigninForm) => {
    await mutateAsync(values,{
      onSuccess: () => {
        router.push("/");
      }
    });
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
          {arabicSignin.login}
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
              <FormikControl
                control="input"
                type="email"
                name="email"
                placeholder={arabicSignin.email}
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                placeholder={arabicSignin.password}
              />
              <div className="flex text-sm mt-5">
                <p className="text-light-primary">
                  <span>{arabicSignin.notHaveAccount} </span>
                  <button
                    type="button"
                    onClick={() => {
                      router.push('/register')
                    }}
                  >
                    {arabicSignin.newAccount}
                  </button>
                </p>
              </div>
              <button
                type="submit"
                className=" text-primary w-fit py-2 px-4 rounded-lg shadow-drop"
              >
                {arabicSignin.login}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SigninForm;
