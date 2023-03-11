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

const linkClassName = "mr-8 main-text-color-light hover:text-gray-900";

// { user, onSignout }: ISignInHeaderProps
const SignInHeader = ({ user }: ISignInHeaderProps) => (
  <UserInfo
    username="مرحباً مصطفى"
    image={userImg}
    dir="ltr"
    imgClassName="w-12 h-12"
  />
);

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
  const router = useRouter();

  return (
    <nav className="text-gray-600 body-font px-[27px] shadow-light">
      <div className="container  flex justify-around flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src={logo} alt="logo" />
          <span className="ml-3 font-bold text-2xl main-text-color-light">
            بالعربية نرتقي{" "}
          </span>
        </Link>

        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#" className={linkClassName}>
            الصفحة الرئيسية
          </Link>
          <Link href="#" className={linkClassName}>
            الآراء
          </Link>
          <Link href="#" className={linkClassName}>
            من نحن؟
          </Link>
        </div>

        {user ? <SignInHeader user={user} /> : <SignOutHeader />}
      </div>
    </nav>
  );
};

export default observer(Navbar);
