import Form from "@/components/form";
import Table from "@/components/table";

const LocalGovernments = () => {
  const localGovernments = [
    { id: "1", name: "Local Government 1" },
    { id: "2", name: "Local Government 2" },
    // Add more local governments as needed
  ];

  const columns = ["id", "name"];

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Local Governments</h1>
        <Table columns={columns} data={localGovernments} />
        <h2 className="text-xl font-bold mt-4">Add Local Government</h2>
        <Form
          fields={[{ name: "name", label: "Name", type: "text" }]}
          onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default LocalGovernments;
