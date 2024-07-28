import { useRouter } from "next/router";

import { useEffect, useState } from "react";

type SubjectDetail = {
  subject: string;
  score: number;
  grade: string;
  remarks: string;
  testScore: number;
};

type ResultDetail = {
  id: string;
  studentName: string;
  studentId: string;
  class: string;
  term: string;
  year: number;
  subjects: SubjectDetail[];
};

const ResultsDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [resultDetail, setResultDetail] = useState<ResultDetail | null>(null);

  useEffect(() => {
    if (id) {
      // Replace with actual data fetching logic
      const fetchData = async () => {
        const data = await fetch(`/api/results/${id}`).then((res) =>
          res.json()
        );
        setResultDetail(data);
      };
      fetchData();
    }
  }, [id]);

  if (!resultDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Result Details</h1>
        <div className="bg-white p-6 rounded shadow-md mb-4">
          <p>
            <strong>Student Name:</strong> {resultDetail.studentName}
          </p>
          <p>
            <strong>Student ID:</strong> {resultDetail.studentId}
          </p>
          <p>
            <strong>Class:</strong> {resultDetail.class}
          </p>
          <p>
            <strong>Term:</strong> {resultDetail.term}
          </p>
          <p>
            <strong>Year:</strong> {resultDetail.year}
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Subjects</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Subject</th>
                <th className="py-2 px-4 border-b">Score</th>
                <th className="py-2 px-4 border-b">Test Score</th>
                <th className="py-2 px-4 border-b">Grade</th>
                <th className="py-2 px-4 border-b">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {resultDetail.subjects.map((subject, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{subject.subject}</td>
                  <td className="py-2 px-4 border-b">{subject.score}</td>
                  <td className="py-2 px-4 border-b">{subject.testScore}</td>
                  <td className="py-2 px-4 border-b">{subject.grade}</td>
                  <td className="py-2 px-4 border-b">{subject.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsDetails;
