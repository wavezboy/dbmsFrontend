import Table from "@/components/table";
import Table2 from "@/components/table2";
import { LG, schools } from "@/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const columns = [
  "id",
  "name",
  "address",
  "town",
  "No of Students",
  "No of Teachers",
];

const Page = () => {
  const router = useRouter();
  const [selectedLG, setSelectedLG] = useState(LG[0]);
  const [selectedType, setSelectedType] = useState("Primary");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const { lg } = router.query;

    if (!lg) return;

    const localGovernment = LG.find((l) => l === lg);

    if (!localGovernment) return;

    setSelectedLG(localGovernment);
  }, [router.query]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="uppercase text-center font-bold text-2xl">
        List of Schools in {selectedLG} Local Government
      </h2>

      <div className="mt-5 flex w-[500px] mx-auto shadow-lg shadow-gray-200 rounded-md overflow-clip">
        <button
          onClick={() => setSelectedType("Primary")}
          className={`flex-1 px-3 py-2 font-semibold transition-all duration-300 ${
            selectedType === "Primary"
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          Primary School
        </button>
        <button
          onClick={() => setSelectedType("Secondary")}
          className={`flex-1 px-3 py-2 font-semibold transition-all duration-300 ${
            selectedType === "Secondary"
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          Secondary School
        </button>
      </div>

      {/* <div></div> */}
      <div className="mt-10">
        <Table2
          columns={columns}
          data={schools}
          hrefKey="id"
          link="school?id="
        />
      </div>
    </div>
  );
};

export default Page;
