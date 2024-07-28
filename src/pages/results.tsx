import { useState } from "react";

import Link from "next/link";
import Form from "@/components/form";
import Modal from "@/components/modal";
import Table from "@/components/table";

type Result = {
  id: string;
  studentName: string;
  studentId: string;
  class: string;
  term: string;
  year: number;
  details: string;
};

const Results = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const results: Result[] = [
    {
      id: "1",
      studentName: "Student 1",
      studentId: "S1",
      class: "Class 1",
      term: "Term 1",
      year: 2021,
      details: "{}",
    },
    {
      id: "2",
      studentName: "Student 2",
      studentId: "S2",
      class: "Class 2",
      term: "Term 2",
      year: 2022,
      details: "{}",
    },
    // Add more results as needed
  ];

  const columns = [
    "id",
    "studentName",
    "studentId",
    "class",
    "term",
    "year",
    "details",
  ];

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log(data);
    setModalOpen(false);
  };

  const renderCell = (column: string, row: Result) => {
    if (column === "details") {
      return (
        <Link href={`/resultdetails?id=${row.id}`}>
          <span className="text-blue-600 hover:underline">View Details</span>
        </Link>
      );
    }
    return row[column as keyof Result];
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Results</h1>
        <Table columns={columns} data={results} renderCell={renderCell} />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
        >
          Add Result
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-bold">Add Result</h2>
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
        </Modal>
      </div>
    </div>
  );
};

export default Results;
