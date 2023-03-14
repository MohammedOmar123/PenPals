import { IRegisterForm } from "@/interfaces/other/IRegisterFrom";
import { ISigninForm } from "@/interfaces/other/ISigninForm";
import ApiService from "@/services/ApiService";
import authStore from "@/store/AuthStore";
import { queryKeys } from "@/utils/constants";
import { endpoints } from "@/utils/endpoints";
import { AxiosError } from "axios";
import { QueryClient, useMutation, useQuery } from "react-query";



const register = async (values: IRegisterForm) => {
  const { confirmPassword, ...rest } = values;
  const { data } = await ApiService.post(endpoints.register, rest);
  return data;
};

 const useRegister = () => {
  return useMutation<any, AxiosError<{ message: string }>, any>({
    mutationFn: register,
  });
};


const signin = async (values: ISigninForm) => {
  const { data } = await ApiService.post(endpoints.signin, values);
  return data;
};

 const useSignin = () => {
  return useMutation<any, AxiosError<{ message: string }>, any>({
    mutationFn: signin,
  });
};

const signout = async () => {
  const { data } = await ApiService.post(endpoints.signout, {});
  return data;
};

 const useSignout = () => {
  return useMutation<any, AxiosError<{ message: string }>, any>({
    mutationFn: signout,
    onSuccess: () => {
      authStore.clearUser();
    }
  });
};

const getUser = async () => {
  const { data } = await ApiService.get(endpoints.verifyMe);
  return data;
}

 const useGetUser = (enabled:boolean = true) => {
  return useQuery<any, AxiosError<{ message: string }>, any>({
    queryKey: queryKeys.me,
    queryFn: getUser,
    enabled,
    retry: 1,
    onSuccess: (data) => {
      authStore.setUser(data)
    },
    onError: () => {
      console.log('first')
    }
  })
}



export { useRegister, useSignin, useSignout, useGetUser };
