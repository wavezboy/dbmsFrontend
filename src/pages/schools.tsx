import Form from "@/components/form";
import Modal from "@/components/modal";
import Table from "@/components/table";

import { useState } from "react";

type School = {
  id: string;
  specialId: string;
  name: string;
  address: string;
  localGovernmentId: string;
  townId: string;
};

const Schools = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const schools: School[] = [
    {
      id: "1",
      specialId: "S1",
      name: "School 1",
      address: "Address 1",
      localGovernmentId: "1",
      townId: "1",
    },
    {
      id: "2",
      specialId: "S2",
      name: "School 2",
      address: "Address 2",
      localGovernmentId: "2",
      townId: "2",
    },
    // Add more schools as needed
  ];

  const columns = [
    "id",
    "specialId",
    "name",
    "address",
    "localGovernmentId",
    "townId",
  ];

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log(data);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Schools</h1>
        <Table columns={columns} data={schools} />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        >
          Add School
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Add School</h2>
          <Form
            fields={[
              { name: "specialId", label: "Special ID", type: "text" },
              { name: "name", label: "Name", type: "text" },
              { name: "address", label: "Address", type: "text" },
              {
                name: "localGovernmentId",
                label: "Local Government ID",
                type: "text",
              },
              { name: "townId", label: "Town ID", type: "text" },
            ]}
            onSubmit={handleFormSubmit}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Schools;
