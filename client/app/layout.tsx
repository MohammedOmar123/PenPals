"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/Header";
import AuthContainer from "@/components/Auth/AuthContainer";
import classNames from "classnames";
import themeStore from "@/store/ThemeStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const queryClient = new QueryClient();

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isDark } = themeStore;

  return (
    <html lang="ar" className={classNames({ dark: isDark })}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body dir="rtl" className="bg-white dark:bg-[#121212]">
        <QueryClientProvider client={queryClient}>
          <AuthContainer>
            <Header />
            {children}
          </AuthContainer>
        </QueryClientProvider>
      </body>
    </html>
  );
}
export default observer(RootLayout);
