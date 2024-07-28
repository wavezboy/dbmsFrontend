import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mt-10 min-h-[80vh] bg-bg">{children}</div>
    </>
  );
}
