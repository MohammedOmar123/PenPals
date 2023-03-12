import Button from "@/components/Button";
import { arabicWaitVerified } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const WaitVerified = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-secondary-light dark:bg-secondary-dark w-[90%] md:w-[32rem] mx-auto text-center rounded-[0.6rem] py-10 px-6">
        <h2 className="font-bold text-xl text-third-dark dark:text-third-light">{arabicWaitVerified.title}</h2>
        <p className="font-bold text-xl mt-12 md:mt-20 mb-8 text-primary">
          {arabicWaitVerified.message}
        </p>
        <div className="text-primary text-right mb-8">
          <span> {arabicWaitVerified.notReceived} </span>
          <Button>{arabicWaitVerified.clickHere}</Button>
        </div>
        <Button className="border border-primary rounded-[0.6rem] px-6 py-2 flex">
          <Link href="/login" className="text-primary">
            {arabicWaitVerified.login}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default WaitVerified;
