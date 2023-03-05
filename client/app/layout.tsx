"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import ApiService from "@/services/ApiService";
import { arabicSignout } from "@/utils/constants";
import { endpoints } from "@/utils/endpoints";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    ApiService.init();
    ApiService.setHeader();
  });

  const handleSignout = async () => {
    await ApiService.post(endpoints.signout,{});
  }
  return (
    <html lang="ar">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body dir="rtl" className="bg-custom-gray">
        <QueryClientProvider client={queryClient}>
          <button type="button" className="border border-[#222] p-2" onClick={handleSignout}>{arabicSignout.signout}</button>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
