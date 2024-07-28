import Form from "@/components/form";
import Table from "@/components/table";

const Schools = () => {
  const schools = [
    {
      id: "1",
      name: "School 1",
      address: "Address 1",
      localGovernmentId: "1",
      townId: "1",
    },
    {
      id: "2",
      name: "School 2",
      address: "Address 2",
      localGovernmentId: "2",
      townId: "2",
    },
    // Add more schools as needed
  ];

  const columns = ["id", "name", "address", "localGovernmentId", "townId"];

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Schools</h1>
        <Table columns={columns} data={schools} />
        <h2 className="text-xl font-bold mt-4">Add School</h2>
        <Form
          fields={[
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
      </div>
    </div>
  );
};

export default Schools;
