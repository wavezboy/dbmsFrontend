import Form from "@/components/form";
import Modal from "@/components/modal";
import Table from "@/components/table";
import { useState } from "react";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

const Users = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const users: User[] = [
    {
      id: "1",
      email: "admin@example.com",
      firstName: "Admin",
      lastName: "User",
      role: "ADMIN",
    },
    {
      id: "2",
      email: "teacher@example.com",
      firstName: "Teacher",
      lastName: "User",
      role: "TEACHER",
    },
    // Add more users as needed
  ];

  const columns = ["id", "email", "firstName", "lastName", "role"];

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log(data);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Table columns={columns} data={users} />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        >
          Add User
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Add User</h2>
          <Form
            fields={[
              { name: "email", label: "Email", type: "email" },
              { name: "firstName", label: "First Name", type: "text" },
              { name: "lastName", label: "Last Name", type: "text" },
              { name: "password", label: "Password", type: "password" },
              { name: "role", label: "Role", type: "text" },
            ]}
            onSubmit={handleFormSubmit}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Users;
