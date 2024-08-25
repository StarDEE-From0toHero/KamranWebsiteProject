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
    firstName: "Nattanat",
    lastName: "Lertariyamaythee",
    role: "Front-End Developer",
    image: "Aomsub.JPG",
    linkedIn:
      "https://www.linkedin.com/in/nattanat-lertariyamaythee-7555b2311/",
    email: "lerdariyamaythee@gmail.com",
  },
  {
    id: 2,
    firstName: "Jeeranan",
    lastName: "Tabudda",
    role: "Designer",
    image: "Amp.JPG",
    linkedIn: "https://www.linkedin.com/in/jeeranan-tabudda-78228227b/",
    email: "jeeranantabudda@gmail.com",
  },
  {
    id: 3,
    firstName: "Akarapong",
    lastName: "Thammawong",
    role: "Prooject Managemer",
    image: "Drake.JPG",
    linkedIn: "https://www.linkedin.com/in/akarapongthammawong/",
    email: "akarapong00123@gmail.com",
  },
  {
    id: 4,
    firstName: "Panus",
    lastName: "Sakulsak",
    role: "Designer",
    image: "Gun.JPG",
    linkedIn:
      "https://www.linkedin.com/in/panus-sakulsak-217b66307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "panus.gun@gmail.com",
  },
  {
    id: 5,
    firstName: "Chitipat",
    lastName: "Chanasuek",
    role: "Front-End Developer",
    image: "Palm.JPG",
    linkedIn: "https://www.linkedin.com/in/chitipat-chanasuek-4198652a0",
    email: "chitipat.c2548@gmail.com",
  },
  {
    id: 6,
    firstName: "Worapat",
    lastName: "Hongsetong",
    role: "Designer",
    image: "Eng.JPG",
    linkedIn: "https://www.linkedin.com/in/worapat-hongsetong-262638318/",
    email: "worapath154@gmail.com",
  },
  {
    id: 7,
    firstName: "Narawit",
    lastName: "Piguntong",
    role: "Designer",
    image: "Champ.JPG",
    linkedIn: "https://www.linkedin.com/in/champ-narawit-piguntong-921988318/",
    email: "boonlerd2400@gmail.com",
  },
];

export default users;
