import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Welcome to ",
  name: "Champions League",
  subtitle:
    "Remember to stay hydrated, keep your masks with you, and have fun ;)",
  cta: "Scroll or Click for Info",
};

// ABOUT DATA
export const aboutData = {
  img: "logistics.png",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "sch1.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sch2.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sch3.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sch4.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sch5.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sch6.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sch7.png",
    title: "",
    info: "",
    info2: "",
    url: "",
    repo: "https://github.com/cobidev/react-simplefolio", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "",
    },
    {
      id: nanoid(),
      name: "codepen",
      url: "",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "",
    },
    {
      id: nanoid(),
      name: "github",
      url: "",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
