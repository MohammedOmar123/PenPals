"use client";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/Header";
import AuthContainer from "@/components/Auth/AuthContainer";

const queryClient = new QueryClient();

function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="ar">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body dir="rtl" className="bg-custom-gray">
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
export default RootLayout;
