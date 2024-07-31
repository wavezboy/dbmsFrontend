import Form from "@/components/form";
import Modal from "@/components/modal";
import Table from "@/components/table";
import { LG } from "@/data";

import { useState } from "react";

type LocalGovernment = {
  id: number;
  name: string;
  link?: string;
};

const localGovernments = LG.map((data, index) => {
  return { id: index + 1, name: data + " local government", link: "/" };
});

const LocalGovernments = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const columns = ["id", "name"];

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log(data);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Local Governments</h1>
        <div className="mt-5">
          <Table columns={columns} data={localGovernments} />
        </div>
        {/* <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        >
          Add Local Government
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Add Local Government</h2>
          <Form
            fields={[{ name: "name", label: "Name", type: "text" }]}
            onSubmit={handleFormSubmit}
          />
        </Modal> */}
      </div>
    </div>
  );
};

export default LocalGovernments;
