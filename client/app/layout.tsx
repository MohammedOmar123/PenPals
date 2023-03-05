'use client'
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import ApiService from "@/services/ApiService";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    ApiService.init();
    ApiService.setHeader();
  })
  return (
    <html lang="ar">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body dir="rtl" className="bg-custom-gray">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
