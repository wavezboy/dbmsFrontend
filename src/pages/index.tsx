import { Poppins } from "next/font/google";
import Layout from "@/components/layout";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const list = ["education", "health", "finance", "agric"];

export default function Home() {
  return (
    <main
      className={`flex relative w-full overflow-clip min-h-[80vh] pt-[42px] flex-col justify-center items-center ${poppins.className}`}
    >
      <h1 className="text-3xl uppercase font-bold">
        Welcome to KANO STATE DBMS
      </h1>

      <div className="flex flex-wrap justify-center gap-5 items-center mt-20">
        {list.map((data, index) => (
          <Link
            href={index === 0 ? "/education?lg=ajingi" : "#"}
            key={index}
            className="w-[250px] h-[150px] bg-blue-200 shadow-lg grid place-content-center"
          >
            <span className="font-bold text-2xl uppercase">{data}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
