import { useGetUser } from "@/hooks/auth.hook";
import { IAuthContainerProps } from "@/interfaces/props/IAuthContainer";
import React, { useEffect } from "react";
import Overlay from "../Overlay";



const AuthContainer = ({ children }: IAuthContainerProps) => {
  // for get user/me
  const { isLoading } = useGetUser();

  return <main>
    {/* {isLoading && <Overlay />} */}
    {children}
    </main>;
};

export default AuthContainer;
