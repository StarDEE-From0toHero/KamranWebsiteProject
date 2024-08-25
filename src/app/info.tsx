interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  linkedIn: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    firstName: "Jeeranan",
    lastName: "Tabudda",
    role: "CEO & Founder",
    image: "Amp.webp",
    linkedIn: "https://www.linkedin.com/in/jeeranan-tabudda-78228227b/",
    email: "jeeranantabudda@gmail.com",
  },
  {
    id: 2,
    firstName: "Akarapong",
    lastName: "Thammawong",
    role: "Engineer",
    image: "Drake.webp",
    linkedIn: "https://www.linkedin.com/in/akarapongthammawong/",
    email: "akarapong00123@gmail.com",
  },
  {
    id: 3,
    firstName: "Nattanat",
    lastName: "Lertariyamaythee",
    role: "Engineer",
    image: "Aomsub.webp",
    linkedIn:
      "https://www.linkedin.com/in/nattanat-lertariyamaythee-7555b2311/",
    email: "lerdariyamaythee@gmail.com",
  },
  {
    id: 4,
    firstName: "Chitipat",
    lastName: "Chanasuek",
    role: "Engineer",
    image: "Palm.webp",
    linkedIn: "https://www.linkedin.com/in/chitipat-chanasuek-4198652a0",
    email: "chitipat.c2548@gmail.com",
  },
  {
    id: 5,
    firstName: "Panus",
    lastName: "Sakulsak",
    role: "Business Operation",
    image: "Gun.webp",
    linkedIn:
      "https://www.linkedin.com/in/panus-sakulsak-217b66307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "panus.gun@gmail.com",
  },
  {
    id: 6,
    firstName: "Worapat",
    lastName: "Hongsetong",
    role: "UX/UI Designer",
    image: "Eng.webp",
    linkedIn: "https://www.linkedin.com/in/worapat-hongsetong-262638318/",
    email: "worapath154@gmail.com",
  },
  {
    id: 7,
    firstName: "Narawit",
    lastName: "Piguntong",
    role: "UX/UI Designer",
    image: "Champ.webp",
    linkedIn: "https://www.linkedin.com/in/champ-narawit-piguntong-921988318/",
    email: "boonlerd2400@gmail.com",
  },
];

export default users;
