import Form from "@/components/form";
import Table from "@/components/table";

const Results = () => {
  const results = [
    {
      id: "1",
      studentName: "Student 1",
      studentId: "S1",
      class: "Class 1",
      term: "Term 1",
      year: 2023,
    },
    {
      id: "2",
      studentName: "Student 2",
      studentId: "S2",
      class: "Class 2",
      term: "Term 2",
      year: 2023,
    },
    // Add more results as needed
  ];

  const columns = ["id", "studentName", "studentId", "class", "term", "year"];

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Results</h1>
        <Table columns={columns} data={results} />
        <h2 className="text-xl font-bold mt-4">Add Result</h2>
        <Form
          fields={[
            { name: "studentName", label: "Student Name", type: "text" },
            { name: "studentId", label: "Student ID", type: "text" },
            { name: "class", label: "Class", type: "text" },
            { name: "term", label: "Term", type: "text" },
            { name: "year", label: "Year", type: "number" },
            { name: "details", label: "Details", type: "text" },
          ]}
          onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default Results;
