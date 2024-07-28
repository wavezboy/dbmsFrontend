import Form from "@/components/form";
import Table from "@/components/table";

const Students = () => {
  const students = [
    {
      id: "1",
      studentId: "S1",
      firstName: "Student 1",
      lastName: "Last 1",
      gender: "M",
      class: "Class 1",
    },
    {
      id: "2",
      studentId: "S2",
      firstName: "Student 2",
      lastName: "Last 2",
      gender: "F",
      class: "Class 2",
    },
    // Add more students as needed
  ];

  const columns = [
    "id",
    "studentId",
    "firstName",
    "lastName",
    "gender",
    "class",
  ];

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Students</h1>
        <Table columns={columns} data={students} />
        <h2 className="text-xl font-bold mt-4">Add Student</h2>
        <Form
          fields={[
            { name: "studentId", label: "Student ID", type: "text" },
            { name: "firstName", label: "First Name", type: "text" },
            { name: "lastName", label: "Last Name", type: "text" },
            { name: "gender", label: "Gender", type: "text" },
            { name: "class", label: "Class", type: "text" },
          ]}
          onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default Students;
