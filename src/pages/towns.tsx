import Form from "@/components/form";
import Modal from "@/components/modal";
import Table from "@/components/table";
import { useState } from "react";

type Town = {
  id: string;
  name: string;
  localGovernmentId: string;
};

const Towns = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const towns: Town[] = [
    { id: "1", name: "Town 1", localGovernmentId: "1" },
    { id: "2", name: "Town 2", localGovernmentId: "2" },
    // Add more towns as needed
  ];

  const columns = ["id", "name", "localGovernmentId"];

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log(data);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Towns</h1>
        <Table columns={columns} data={towns} />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        >
          Add Town
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Add Town</h2>
          <Form
            fields={[
              { name: "name", label: "Name", type: "text" },
              {
                name: "localGovernmentId",
                label: "Local Government ID",
                type: "text",
              },
            ]}
            onSubmit={handleFormSubmit}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Towns;
