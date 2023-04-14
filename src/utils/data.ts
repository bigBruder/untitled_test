import { Clip } from "../assets";

export type Group = {
  name: string;
  backgroundColor: string;
  color: string;
};

export type DataRow = {
  id: number;
  icon: HTMLImageElement;
  type: string;
  subject: string;
  year: string;
  person: string;
  admin: string;
  groups: Group[];
};

const data: DataRow[] = [
  {
    id: 1,
    icon: Clip,
    type: "Critical Analysys",
    subject: "Literature",
    year: "7",
    person: "Alphington Grammar",
    admin: "James Smith",
    groups: [
      { name: "INTRO", backgroundColor: "#DABCCE", color: "AD1A72" },
      { name: "WHAT", backgroundColor: "#D6CFE0", color: "#6940A5" },
      { name: "HOW", backgroundColor: "#3D9487", color: "#000000" },
      { name: "WHY", backgroundColor: "#3A89AB", color: "#0B6E99" },
      { name: "IMAGE", backgroundColor: "#F2C94C", color: "#DFAB01" },
      { name: "EXPRESSION", backgroundColor: "#D9730D", color: "#FFFFFF" },
    ],
  },
  {
    id: 2,
    icon: null,
    type: "Creative Writing",
    subject: "Literature",
    year: "7",
    person: "Only me",
    admin: "Grace Elliott",
    groups: [],
  },
  {
    id: 3,
    icon: null,
    type: "Descriptive Essay",
    subject: "Literature",
    year: "7",
    person: "Public",
    admin: "",
    groups: [],
  },
  {
    id: 4,
    icon: Clip,
    type: "Critical Analysys",
    subject: "Literature",
    year: "8",
    person: "Alphington Grammar",
    admin: "",
    groups: [],
  },
];

export default data;
