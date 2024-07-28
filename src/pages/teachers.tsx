import Form from "@/components/form";
import Table from "@/components/table";

const Teachers = () => {
  const teachers = [
    {
      id: "1",
      teacherId: "T1",
      firstName: "Teacher 1",
      lastName: "Last 1",
      isActive: true,
    },
    {
      id: "2",
      teacherId: "T2",
      firstName: "Teacher 2",
      lastName: "Last 2",
      isActive: false,
    },
    // Add more teachers as needed
  ];

  const columns = ["id", "teacherId", "firstName", "lastName", "isActive"];

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Teachers</h1>
        <Table columns={columns} data={teachers} />
        <h2 className="text-xl font-bold mt-4">Add Teacher</h2>
        <Form
          fields={[
            { name: "teacherId", label: "Teacher ID", type: "text" },
            { name: "firstName", label: "First Name", type: "text" },
            { name: "lastName", label: "Last Name", type: "text" },
            { name: "isActive", label: "Is Active", type: "checkbox" },
          ]}
          onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default Teachers;
