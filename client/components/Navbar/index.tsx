"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import Button from "../Button";
import UserInfo from "../UserInfo";
import userImg from "@/public/images/userImg.png";
import authStore from "@/store/AuthStore";
import { ISignInHeaderProps } from "@/interfaces/props/ISignInHeader";
import { arabicRegister, arabicSignin, arabicSignout } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import { useSignout } from "@/hooks/auth.hook";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import themeStore from "@/store/ThemeStore";

const linkClassName = "mr-8 main-text-color-light hover:text-gray-900";

const SignInHeader = ({ user }: ISignInHeaderProps) => {
  const { mutateAsync: signout } = useSignout();
  const handleSignout = async () => {
    await signout({});
  };
  return (
    <div className="flex">
      <UserInfo
        username={`مرحبا ${authStore.fullName}`}
        image={user.image || userImg}
        dir="ltr"
        imgClassName="w-12 h-12"
      />
      <Button className="bg-primary text-white" onClick={handleSignout}>
        {arabicSignout.signout}
      </Button>
    </div>
  );
};

const SignOutHeader = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.push("/login")}
        className="bg-text-dark text-light"
      >
        {arabicSignin.login}
      </Button>

      <Button
        onClick={() => router.push("/register")}
        className="bg-primary text-white"
      >
        {arabicRegister.register}
      </Button>
    </div>
  );
};

const Navbar = () => {
  const user = authStore.user;
  const { isDark, toggleTheme } = themeStore;

  return (
    <nav className="bg-secondary-light dark:bg-secondary-dark body-font px-[27px] shadow-light">
      <div className="container  flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-theme-primary-light dark:text-theme-primary-light mb-4 md:mb-0"
        >
          <Image src={logo} alt="logo" />
          <span className="ml-3 font-bold text-2xl main-text-color-light">
            بالعربية نرتقي{" "}
          </span>
        </Link>

        <div className="flex gap-2">
          <Button
            className="!rounded-full bg-white !px-2 !py-2 shadow-md"
            onClick={toggleTheme}
          >
            {
              isDark? <SunIcon className="w-6 h-6 text-yellow-500"/> : <MoonIcon className="w-6 h-6 text-[black]"/>
            }
          </Button>
          {user ? <SignInHeader user={user} /> : <SignOutHeader />}
        </div>
      </div>
    </nav>
  );
};

export default observer(Navbar);
