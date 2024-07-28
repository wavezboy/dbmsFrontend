import Form from "@/components/form";
import Modal from "@/components/modal";
import Table from "@/components/table";

import { useState } from "react";

type LocalGovernment = {
  id: string;
  name: string;
};

const LocalGovernments = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const localGovernments: LocalGovernment[] = [
    { id: "1", name: "Local Government 1" },
    { id: "2", name: "Local Government 2" },
    // Add more local governments as needed
  ];

  const columns = ["id", "name"];

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log(data);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Local Governments</h1>
        <Table columns={columns} data={localGovernments} />
        <button
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
        </Modal>
      </div>
    </div>
  );
};

export default LocalGovernments;
