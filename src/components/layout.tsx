import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { LG } from "@/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    const { lg } = router.query;
    if (!lg) return;

    setPath(lg as string);
  }, [router.query]);

  return (
    <div>
      <aside className="fixed left-0 top-0 h-screen space-y-3 bg-blue-100 px-5 py-5 w-[200px] overflow-y-scroll">
        <Link
          href="/"
          className="w-full text-center py-1 inline-block text-sm border-2 border-blue-600 rounded-md"
        >
          Back to Homepage
        </Link>
        <h3 className="font-bold text-center">Select a LG</h3>
        {LG.map((data, index) => (
          <Link
            href={"/education?lg=" + data}
            key={index}
            className={`block px-3 py-2 w-full text-left capitalize rounded-md ${
              path.includes(data)
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {data}
          </Link>
        ))}
      </aside>

      <main className="ml-[200px] px-10">{children}</main>
    </div>
    // <>
    //   <Header />
    //   <div className="mt-10 min-h-[80vh] bg-bg">{children}</div>
    // </>
  );
}
