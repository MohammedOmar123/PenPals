import { useSignout } from "@/hooks/auth.hook";
import authStore from "@/store/AuthStore";
import { arabicRegister, arabicSignin, arabicSignout } from "@/utils/constants";
import React from "react";
import { observer } from "mobx-react";
import Loading from "../Loading";
import Link from "next/link";
import { ISignInHeaderProps } from "@/interfaces/props/ISignInHeader";
import Navbar from "../Navbar";



const SignInHeader = ({ user }: ISignInHeaderProps) => (
  <>
    <button
      type="button"
      className="border border-[#222] p-2"
    >
      {arabicSignout.signout}
    </button>
    <p>{`${user?.firstName} ${user?.lastName}`}</p>
  </>
);

const SignOutHeader = () => {
  return (
    <div className="flex gap-3">
      <Link href="/login">{arabicSignin.login}</Link>
      <Link href="/register">{arabicRegister.register}</Link>
    </div>
  );
};


const Header = () => {
  const { isLoading, mutateAsync: signout } = useSignout();
  const user = authStore.user;

  const handleSignout = async () => {
    await signout({});
  };

  return (
    <>
      {isLoading && <Loading />}
      <header>
         <Navbar />
        {/* {user && <SignInHeader user={user} onSignout={handleSignout} />}
        {!user && <SignOutHeader />} */}
      </header>
    </>
  );
};

export default observer(Header);
