import Form from "@/components/form";
import Table from "@/components/table";

const Users = () => {
  const users = [
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
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <Table columns={columns} data={users} />
        <h2 className="text-xl font-bold mt-4">Add User</h2>
        <Form
          fields={[
            { name: "email", label: "Email", type: "email" },
            { name: "firstName", label: "First Name", type: "text" },
            { name: "lastName", label: "Last Name", type: "text" },
            { name: "password", label: "Password", type: "password" },
            { name: "role", label: "Role", type: "text" },
          ]}
          onSubmit={() => handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default Users;
