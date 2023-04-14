type DataItem = {
  id: number;
  vector: string;
  type: string;
  subject: string;
  year: string;
  person: string;
  admin: string;
  groups: {
    name: string;
    backgroundColor: string;
  }[];
};

const data: DataItem[] = [
  {
    id: 1,
    vector: "",
    type: "Critical Analysys",
    subject: "Literature",
    year: "7",
    person: "Alphington Grammar",
    admin: "James Smith",
    groups: [
      { name: "INTRO", backgroundColor: "#AD1A72" },
      { name: "WHAT", backgroundColor: "#D6CFE0" },
      { name: "HOW", backgroundColor: "#3D9487" },
      { name: "WHY", backgroundColor: "#0B6E99" },
      { name: "IMAGE", backgroundColor: "#DFAB01" },
      { name: "EXPRESSION", backgroundColor: "#D9730D" },
    ],
  },
  {
    id: 2,
    vector: "",
    type: "Creative Writing",
    subject: "Literature",
    year: "7",
    person: "Only me",
    admin: "Grace Elliott",
    groups: [],
  },
  {
    id: 3,
    vector: "",
    type: "Descriptive Essay",
    subject: "Literature",
    year: "7",
    person: "Public",
    admin: "",
    groups: [],
  },
  {
    id: 4,
    vector: "",
    type: "Critical Analysys",
    subject: "Literature",
    year: "8",
    person: "Alphington Grammar",
    admin: "",
    groups: [],
  },
];

export default data;
