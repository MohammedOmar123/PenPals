"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/Header";
import AuthContainer from "@/components/Auth/AuthContainer";
import classNames from "classnames";
import themeStore from "@/store/ThemeStore";
import { observer } from "mobx-react-lite";

const queryClient = new QueryClient();

function RootLayout({ children }: { children: React.ReactNode }) {
  const { isDark } = themeStore;

  return (
    <html lang="ar" className={classNames({ dark: isDark })}>
      <head />
      <body dir="rtl" className="bg-secondary-light dark:bg-[#121212] h-[100vh]">
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
