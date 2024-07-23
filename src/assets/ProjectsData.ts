export interface Project {
    id: number;
    name: string;
    edgyName: string;
    description: string | null;
    tags: string[];
    link: string;
    numberSrc: string;
    hoverSrc: string;
    projectImg: string;
  }

const projects = [
  {
    id: 1,
    name: "Tamagrow",
    edgyName: "/tamagrow.io",
    description: `Tamagrow is a web app that allows you to grow your own virtual
      plant. It's a fun and easy way to learn about plant care and to
      have a little green friend to take care of.`,
    tags: ["Game", "Desktop", "Design"],
    link: "/project/1",
    projectImg: "/img/tamagrow.png",
    projectLogoImg: "/img/tamagrow_logo.png",
    numberSrc: "/img/numbers/1.svg",
    hoverSrc: "/img/numbers/filled/1.svg",

  },
  {
    id: 2,
    name: "RKK",
    edgyName: "/rkk",
    description: null,
    tags: ["Web", "Agency", "Design"],
    link: "/project/2",
    projectImg: "/img/rkk.png",
    numberSrc: "/img/numbers/2.svg",
    hoverSrc: "/img/numbers/filled/2.svg",
  },
  {
    id: 3,
    name: "Kual Notes",
    edgyName: "/kualnotes",
    description: null,
    tags: ["Web", "Design", "Agency"],
    link: "/project/3",
    projectImg: "/img/kualnotes.png",
    numberSrc: "/img/numbers/3.svg",
    hoverSrc: "/img/numbers/filled/3.svg",
  },
  {
    id: 4,
    name: "OZPlay",
    edgyName: "/ozplay",
    description: null,
    tags: ["Web", "Design"],
    link: "/project/4",
    projectImg: "/img/ozplay.png",
    numberSrc: "/img/numbers/4.svg",
    hoverSrc: "/img/numbers/filled/4.svg",
  },
  {
    id: 5,
    name: "Poke Dokey",
    edgyName: "/pokedokey",
    description: null,
    tags: ["Web", "Design"],
    link: "/project/5",
    projectImg: "/img/pokedokey.png",
    numberSrc: "/img/numbers/5.svg",
    hoverSrc: "/img/numbers/filled/5.svg",
  },
  {
    id: 6,
    name: "More",
    edgyName: "/more",
    description: "design projects we've done",
    tags: ["Design"],
    link: "/project/6",
    projectImg: "/img/more.png",
    numberSrc: "/img/numbers/6.svg",
    hoverSrc: "/img/numbers/filled/6.svg",
  },
];

export { projects };
