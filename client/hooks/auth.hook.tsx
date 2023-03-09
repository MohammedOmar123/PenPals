import { IRegisterForm } from "@/interfaces/other/IRegisterFrom";
import { ISigninForm } from "@/interfaces/other/ISigninForm";
import ApiService from "@/services/ApiService";
import { endpoints } from "@/utils/endpoints";
import { AxiosError } from "axios";
import { useMutation } from "react-query";



const register = async (values: IRegisterForm) => {
  const { confirmPassword, ...rest } = values;
  const { data } = await ApiService.post(endpoints.register, rest);
  return data;
};

export const useRegister = () => {
  return useMutation<any, AxiosError<{ message: string }>, any>({
    mutationFn: register,
  });
};


const signin = async (values: ISigninForm) => {
  const { data } = await ApiService.post(endpoints.signin, values);
  return data;
};

export const useSignin = () => {
  return useMutation<any, AxiosError<{ message: string }>, any>({
    mutationFn: signin,
  });
};

const signout = async () => {
  const { data } = await ApiService.post(endpoints.signout, {});
  return data;
};

export const useSignout = () => {
  return useMutation<any, AxiosError<{ message: string }>, any>({
    mutationFn: signout,
  });
};
