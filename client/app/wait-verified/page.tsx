import Button from "@/components/Button";
import { arabicWaitVerified } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const WaitVerified = () => {
  return (
    <section className="flex justify-center items-center my-5">
      <div className="bg-white dark:bg-secondary-dark w-[90%] md:w-[35rem] mx-auto text-center rounded-[0.6rem] py-10 px-6">
        <h2 className="text-2xl font-bold text-third-dark dark:text-third-light text-center mb-4 w-full">
          {arabicWaitVerified.title}
        </h2>
        <p className="font-bold text-xl mt-10 mb-12 text-primary opacity-[0.7]">
          {arabicWaitVerified.message}
        </p>
        <div className="text-primary mb-8 flex items-center">
          <span className="text-third-dark">
            {" "}
            {arabicWaitVerified.notReceived}
          </span>
          <Button className="!p-0 !font-bold">
            {arabicWaitVerified.clickHere}
          </Button>
        </div>
        <Button className="bg-primary rounded-[0.6rem] px-6 py-2 flex">
          <Link href="/login" className="text-white">
            {arabicWaitVerified.login}
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default WaitVerified;
