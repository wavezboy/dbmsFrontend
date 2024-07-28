import { Poppins } from "next/font/google";
import Layout from "@/components/layout";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex relative w-full overflow-clip min-h-screen pt-[42px] flex-col  items-center ${poppins.className}`}
      >
        <h1 className="text-2xl font-bold">
          Welcome to the School Management System
        </h1>
      </main>
    </Layout>
  );
}
