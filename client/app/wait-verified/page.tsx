import { arabicWaitVerified } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const WaitVerified = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white w-[90%] md:w-[32rem] mx-auto text-center rounded-[0.6rem] py-10 px-6">
        <h2 className="font-bold text-xl text-[#222222]">
          {arabicWaitVerified.title}
        </h2>
        <p className="font-bold text-xl mt-12 md:mt-20 mb-8 text-[#444444]">
          {arabicWaitVerified.message}
        </p>
        <div className="text-[#0C8CE9] text-right mb-8">
          <span> {arabicWaitVerified.notReceived} </span>
          <button type="button" className="font-bold">
            {arabicWaitVerified.clickHere}
          </button>
        </div>
        <button
          type="button"
          className="border border-[#0C8CE9] rounded-[0.6rem] px-6 py-2 flex"
        >
          <Link href="/login" className="text-[#0C8CE9]">
            {arabicWaitVerified.login}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default WaitVerified;
