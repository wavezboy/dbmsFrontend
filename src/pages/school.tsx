import Table2 from "@/components/table2";
import { schools, students, teachers } from "@/data";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

const columns = ["id", "studentId", "firstName", "lastName", "gender", "class"];
const teacherColumns = [
  "id",
  "firstName",
  "lastName",
  "isPrincipal",
  "isHeadmaster",
];

const Schools = () => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log(data);
    setModalOpen(false);
  };

  const [school, setSchool] = useState<null | (typeof schools)[0]>(null);
  const [selectedType, setSelectedType] = useState("student");

  useEffect(() => {
    const { id } = router.query;

    if (!id) return;

    const school = schools.find((school) => school.id === id);

    if (!school) return;

    setSchool(school);
  }, [router]);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center uppercase mb-5">
          School Details
        </h1>
        <div className="bg-blue-600 text-white uppercase p-3 rounded shadow-md mb-4 space-y-2">
          <p>
            <strong>Name:</strong> {school?.name}
          </p>
          <p>
            <strong>Address:</strong> {school?.address}
          </p>
          <p>
            <strong>Town:</strong> {school?.town}
          </p>
          <p>
            <strong>Total Number of Students:</strong> {school?.noOfStudents}
          </p>
          <p>
            <strong>Total Number of Teachers:</strong> {school?.noOfTeachers}
          </p>
        </div>

        <div className="mt-5 flex w-[500px] mx-auto shadow-lg shadow-gray-200 rounded-md overflow-clip">
          <button
            onClick={() => setSelectedType("student")}
            className={`flex-1 px-3 py-2 font-semibold transition-all duration-300 ${
              selectedType === "student"
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setSelectedType("teacher")}
            className={`flex-1 px-3 py-2 font-semibold transition-all duration-300 ${
              selectedType === "teacher"
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
          >
            Teachers
          </button>
        </div>

        <div className="mt-10">
          {selectedType === "student" ? (
            <Table2
              columns={columns}
              data={students}
              hrefKey="id"
              link="student?id="
            />
          ) : (
            <Table2
              columns={teacherColumns}
              data={teachers}
              // hrefKey="id"
              link="school?id="
            />
          )}
        </div>

        {/* <button
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
        </Modal> */}
      </div>
    </div>
  );
};

export default Schools;
