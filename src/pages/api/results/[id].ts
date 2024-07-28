import { NextApiRequest, NextApiResponse } from "next";

const results = [
  {
    id: "1",
    studentName: "Student 1",
    studentId: "S1",
    class: "Class 1",
    term: "Term 1",
    year: 2021,
    subjects: [
      {
        subject: "Math",
        score: 90,
        grade: "A",
        remarks: "Excellent",
        testScore: 45,
      },
      {
        subject: "Science",
        score: 85,
        grade: "B",
        remarks: "Good",
        testScore: 40,
      },
      // Add more subjects as needed
    ],
  },
  {
    id: "2",
    studentName: "Student 2",
    studentId: "S2",
    class: "Class 2",
    term: "Term 2",
    year: 2022,
    subjects: [
      {
        subject: "Math",
        score: 80,
        grade: "B",
        remarks: "Good",
        testScore: 40,
      },
      {
        subject: "Science",
        score: 75,
        grade: "C",
        remarks: "Fair",
        testScore: 35,
      },
      // Add more subjects as needed
    ],
  },
  // Add more results as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const result = results.find((r) => r.id === id);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "Result not found" });
  }
}
