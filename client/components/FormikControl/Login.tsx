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
    <section
      className={classNames(
        "w-[90%] md:w-[35rem] my-5 mx-auto shadow-light dark:shadow-dark px-6 md:px-10 py-10 flex flex-col gap-8 rounded-md bg-white dark:bg-secondary-dark",
        {
          "parent-loading": isLoading,
        }
      )}
    >
      <h1 className="text-2xl font-bold text-third-dark dark:text-third-light text-center mb-4">
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
                <span className="dark:text-third-light">
                  {arabicSignin.notHaveAccount}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    router.push("/register");
                  }}
                  className="text-primary"
                >
                  {arabicSignin.newAccount}
                </button>
              </p>
            </div>
            <button
              type="submit"
              className="text-white text-[0.8rem] w-fit py-2 px-4 rounded-lg shadow-drop bg-primary"
            >
              {arabicSignin.login}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default observer(SigninForm);
