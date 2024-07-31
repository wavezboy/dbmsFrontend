export const LG = [
  "ajingi",
  "albasu",
  "bagwai",
  "bebeji",
  "bichi",
  "bunkure",
  "dala",
  "dambatta",
  "dawakin kudu",
  "dawakin-tofa",
  "doguwa",
  "fagge",
  "gabasawa",
  "garko",
  "garun-mallam",
  "gaya",
  "gezawa",
  "kabo",
  "kano municipal",
  "karaye",
  "kibiya",
  "kiru",
  "kumbtso",
  "kunchi",
  "kura",
  "madobi",
  "makoda",
  "minjibir",
  "nassarawa",
  "rano",
  "rimin-gado",
  "rogo",
  "shanono",
  "sumaila",
  "takai",
  "tarauni",
  "tofa",
  "tsanyawa",
  "tudun wada",
  "ungogo",
  "warawa",
  "wudil",
];

export type SchoolType = {
  id: string;
  name: string;
  address: string;
  town: string;
};

export const schools = [
  {
    id: "1",
    name: "Codeschool",
    address: "Address 1",
    town: "Kano",
    noOfStudents: 20,
    noOfTeachers: 10,
  },
  {
    id: "2",
    name: "School 2",
    address: "Address 2",
    town: "Dingi",
    noOfStudents: 20,
    noOfTeachers: 10,
  },
  {
    id: "3",
    name: "School 3",
    address: "Address 3",
    town: "Town 3",
    noOfStudents: 20,
    noOfTeachers: 10,
  },
  {
    id: "4",
    name: "School 4",
    address: "Address 4",
    town: "Town 4",
    noOfStudents: 20,
    noOfTeachers: 10,
  },
  {
    id: "5",
    name: "School 5",
    address: "Address 5",
    town: "Town 5",
    noOfStudents: 20,
    noOfTeachers: 10,
  },
  // Add more schools as needed
];

export const students = [
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

export const teachers = [
  {
    id: "1",
    firstName: "Teacher 1",
    lastName: "Last 1",
    isPrincipal: false,
    isHeadmaster: true,
  },
  {
    id: "2",
    firstName: "Teacher 2",
    lastName: "Last 2",
    isPrincipal: true,
    isHeadmaster: false,
  },
  // Add more teachers as needed
];

export const results = [
  {
    id: "1",
    studentName: "Student 1",
    studentId: "S1",
    class: "Class 1",
    term: "Term 1",
    year: 2021,
  },
  {
    id: "2",
    studentName: "Student 2",
    studentId: "S2",
    class: "Class 2",
    term: "Term 2",
    year: 2022,
  },
  // Add more results as needed
];
