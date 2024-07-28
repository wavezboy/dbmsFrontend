import Form from "@/components/form";
import Modal from "@/components/modal";
import Table from "@/components/table";

import { useState } from "react";

type Teacher = {
  id: string;
  teacherId: string;
  firstName: string;
  lastName: string;
  currentSchoolId: string;
  isActive: boolean;
  isPrincipal: boolean;
  isHeadmaster: boolean;
};

const Teachers = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const teachers: Teacher[] = [
    {
      id: "1",
      teacherId: "T1",
      firstName: "Teacher 1",
      lastName: "Last 1",
      currentSchoolId: "S1",
      isActive: true,
      isPrincipal: false,
      isHeadmaster: true,
    },
    {
      id: "2",
      teacherId: "T2",
      firstName: "Teacher 2",
      lastName: "Last 2",
      currentSchoolId: "S2",
      isActive: true,
      isPrincipal: true,
      isHeadmaster: false,
    },
    // Add more teachers as needed
  ];

  const columns = [
    "id",
    "teacherId",
    "firstName",
    "lastName",
    "currentSchoolId",
    "isActive",
    "isPrincipal",
    "isHeadmaster",
  ];

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log(data);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Teachers</h1>
        <Table columns={columns} data={teachers} />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        >
          Add Teacher
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Add Teacher</h2>
          <Form
            fields={[
              { name: "teacherId", label: "Teacher ID", type: "text" },
              { name: "firstName", label: "First Name", type: "text" },
              { name: "lastName", label: "Last Name", type: "text" },
              {
                name: "currentSchoolId",
                label: "Current School ID",
                type: "text",
              },
              { name: "isActive", label: "Is Active", type: "checkbox" },
              { name: "isPrincipal", label: "Is Principal", type: "checkbox" },
              {
                name: "isHeadmaster",
                label: "Is Headmaster",
                type: "checkbox",
              },
            ]}
            onSubmit={handleFormSubmit}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Teachers;
