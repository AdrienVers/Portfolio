import { StaticImageData } from "next/image";
import Angular from "../../assets/Illustrations/Angular.png";
import NET7 from "../../assets/Illustrations/NET7.png";
import Ecosystem from "../../assets/Illustrations/Ecosystem.png";
import Tests from "../../assets/Illustrations/Tests.png";
import Hooks from "../../assets/Illustrations/Hooks.png";
import Frameworks from "../../assets/Illustrations/Frameworks.png";
import ESMESudria from "../../assets/Illustrations/ESMESudria.png";
import CleanArchitecture from "../../assets/Illustrations/Clean.png";
import HexagonalArchitecture from "../../assets/Illustrations/Hexagonal.png";
import { v4 as uuidv4 } from "uuid";

interface EducationData {
  id: string;
  name: string;
  image: StaticImageData;
  tags: Array<String>;
  link: string;
  owner: string;
}

export const EDUCATION_DATA: EducationData[] = [
  {
    id: uuidv4(),
    name: "Formation Clean Architecture (2023)",
    image: CleanArchitecture,
    tags: [
      "Clean Architecture",
      "Domain Driven Design",
      "CQRS",
      "Event Sourcing",
      ".NET 8",
    ],
    link: "https://hts-learning.com/shop/course/infos/clean-architecture-dotnet",
    owner: "Christophe Mommer (Senior FullStack)",
  },
  {
    id: uuidv4(),
    name: "Hexagonal Architecture (2023)",
    image: HexagonalArchitecture,
    tags: [
      "Hexagonal Architecture",
      "Ports & Adapters",
      "Use Cases",
      "Custom Hooks",
      "DDD",
      "NextJS",
      "NestJS",
      "CQRS",
    ],
    link: "https://academy.ancyr.fr/",
    owner: "Anthony Cyrille (Senior FullStack)",
  },
  {
    id: uuidv4(),
    name: "Formation C# / ASP.NET (2023)",
    image: NET7,
    tags: [
      "C# v11 (POO)",
      ".NET 7",
      "ASP.NET",
      "EF Core",
      "LINQ",
	  "Swagger",
      "SQL Server",
      "Docker",
    ],
    link: "https://hts-learning.com/shop/course/infos/csharp",
    owner: "Christophe Mommer (Senior FullStack)",
  },
  {
    id: uuidv4(),
    name: "Formation Angular (2023)",
    image: Angular,
    tags: ["Angular v16", "TypeScript", "RxJS", "Signals", "Directives", "Modules", "Pipes", "Observables"],
    link: "https://www.udemy.com/course/the-complete-guide-to-angular-2/",
    owner: "Max Schwarzmüller (Senior FullStack)",
  },
  {
    id: uuidv4(),
    name: "Formation NextJS (2022)",
    image: Ecosystem,
    tags: [
      "NextJS v13",
      "React v18",
      "TypeScript",
      "Zod",
      "React-Q",
      "Prisma",
      "NextAuth",
      "RTL / Jest",
    ],
    link: "https://codelynx.dev/nextreact",
    owner: "Melvyn Malherbe (Senior FullStack)",
  },
  {
    id: uuidv4(),
    name: "Formation sur les tests (2022)",
    image: Tests,
    tags: [
      "Test unitaire (RTL / Jest)",
      "TypeScript",
      "React",
      "Test d'intégration (Cypress)",
    ],
    link: "https://formations.mikecodeur.com",
    owner: "Mickaël Cabanas (Senior FullStack)",
  },
  {
    id: uuidv4(),
    name: "Formation React (2022)",
    image: Hooks,
    tags: [
      "React v18",
      "useState",
      "useEffect",
      "useContext",
      "useRef",
      "useMemo",
      "useCallback",
    ],
    link: "https://codelynx.dev/nextreact",
    owner: "Melvyn Malherbe (Senior FullStack)",
  },
  {
    id: uuidv4(),
    name: "Formation Frontend (2021)",
    image: Frameworks,
    tags: [
      "React",
      "Redux",
      "VueJS",
      "Angular",
      "Méthodes Agiles (SCRUM, KANBAN)",
      "SEO",
    ],
    link: "https://openclassrooms.com/fr/courses/7150626-utilisez-le-state-manager-redux-pour-gerer-l-etat-de-vos-applications",
    owner: "OpenClassrooms (Formation en ligne)",
  },
  {
    id: uuidv4(),
    name: "Formation Ingénieur (2017-20)",
    image: ESMESudria,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "C",
      "C++ (POO)",
      "MySQL",
      "PHP",
      "Unix",
      "Réseau",
    ],
    link: "https://www.esme.fr/formation-ingenieur/ingenieur-intelligence-artificielle",
    owner: "ESME Sudria (Ecole d'ingénieur)",
  },
];
