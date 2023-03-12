"use client";
import { Formik, Form, FormikHelpers } from "formik";
import FormikControl from ".";
import { arabicSignin, queryKeys } from "@/utils/constants";
import { validationSchema } from "@/validation/signin";
import { useRouter } from "next/navigation";
import { useGetUser, useSignin } from "@/hooks/auth.hook";
import { observer } from "mobx-react";
import authStore from "@/store/AuthStore";
import { ISigninForm } from "@/interfaces/other/ISigninForm";
import Loading from "../Loading";
import classNames from "classnames";

const initialValues = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const router = useRouter();
  const { mutateAsync: signin, data, isError, error, isLoading } = useSignin();
  const { refetch } = useGetUser(false);
  const onSubmit = async (
    values: ISigninForm,
    { setSubmitting }: FormikHelpers<ISigninForm>
  ) => {
    await signin(values, {
      onSuccess: async () => {
        await refetch();
        router.push("/");
      },
      onSettled: () => {
        setSubmitting(false);
      },
      onError: (err) => {
        if (err?.response?.status === 422) {
          router.push("/wait-verified");
        }
      },
    });
  };

  return (
    <>
      <div
        className={classNames(
          "w-[90%] md:w-[35rem] my-5 mx-auto shadow-light px-6 md:px-10 py-10 flex flex-col gap-8 rounded-md bg-secondary-light dark:bg-secondary-dark",
          {
            "parent-loading": isLoading,
          }
        )}
      >
        <h1 className="text-2xl font-bold text-primary text-center mb-4">
          {arabicSignin.login}
        </h1>
        {isLoading && <Loading />}
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
                      router.push("/register");
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

export default observer(SigninForm);
