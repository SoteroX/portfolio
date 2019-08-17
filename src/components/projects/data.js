import ocelot from "../../images/ocelot.png";
import ireview from "../../images/ireview.png";
import electtro_site from "../../images/electtro_site.png";
import freelancer from "../../images/freelancer.png";
import comingSoon from "../../images/coming-soon.jpg";

export const list = [
  {
    id: 0,
    title: "Elettrorapido Site",
    description: "",
    comingsoon: false,
    site: "https://antek-aad-mu.000webhostapp.com/",
    repo: "",
    image: electtro_site,
    stack: ["React", "Node", "Bootstrap"]
  },
  {
    id: 1,
    title: "Elettrorapido Desktop",
    description: "",
    comingsoon: true,
    site: "",
    repo: "",
    image: comingSoon,
    stack: ["React", "Node", "Redux", "MYSQL", "Electron", "Express"]
  },
  {
    id: 2,
    title: "Ocelot",
    description:
      "Ocelot is a project managment app which I created to be able to keep track of tasks and issues while being able to chat with your coworkers",
    comingsoon: false,
    site: "https://ocelot13.herokuapp.com/",
    repo: "https://github.com/SoteroX/ocelot",
    image: ocelot,
    stack: [
      "React",
      "Node",
      "SemanticUI",
      "MongoDB",
      "Redux",
      "Express",
      "Heroku"
    ]
  },
  {
    id: 3,
    title: "Freelancer_Jobs",
    description: "",
    comingsoon: true,
    site: "",
    repo: "",
    image: freelancer,
    stack: ["Ruby on Rails", "Bulma", "Postgres", "jQuery"]
  },
  {
    id: 4,
    title: "iReviews",
    description: "",
    comingsoon: false,
    site: "https://reviewsite-74d74.firebaseapp.com/movies",
    repo: "https://github.com/SoteroX/iReview",
    image: ireview,
    stack: ["React", "Redux", "Bootstrap", "Firebase"]
  }
];
