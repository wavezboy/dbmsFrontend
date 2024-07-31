import Form from "@/components/form";
import Modal from "@/components/modal";
import Table from "@/components/table";
import Table2 from "@/components/table2";
import { results, students } from "@/data";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

type Student = {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  gender: string;
  class: string;
};
const columns = ["id", "studentName", "studentId", "class", "term", "year"];

const Students = () => {
  const router = useRouter();

  const [student, setStudent] = useState<null | (typeof students)[0]>(null);

  useEffect(() => {
    const { id } = router.query;

    if (!id) return;

    const student = students.find((student) => student.id === id);

    if (!student) return;

    setStudent(student);
  }, [router]);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center uppercase mb-5">
          Student Details
        </h1>
        <div className="bg-blue-600 text-white uppercase p-3 rounded shadow-md mb-4 space-y-2">
          <p>
            <strong>FirstName:</strong> {student?.firstName}
          </p>
          <p>
            <strong>LastName:</strong> {student?.lastName}
          </p>
          <p>
            <strong>Gender:</strong> {student?.gender}
          </p>
          <p>
            <strong>Class:</strong> {student?.class}
          </p>
          <p>
            <strong>School:</strong> Codeschool
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold">RESULTS</h2>
          <Table2
            columns={columns}
            data={results}
            hrefKey="id"
            link="resultdetails?id="
          />
        </div>
        {/* <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        >
          Add Student
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Add Student</h2>
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
        </Modal> */}
      </div>
    </div>
  );
};

export default Students;
