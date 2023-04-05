import { StaticImageData } from "next/image";
import NET7 from "../../assets/Illustrations/NET7.png";
import Ecosystem from "../../assets/Illustrations/Ecosystem.png";
import Types from "../../assets/Illustrations/Types.png";
import Tests from "../../assets/Illustrations/Tests.png";
import Hooks from "../../assets/Illustrations/Hooks.png";
import Frameworks from "../../assets/Illustrations/Frameworks.png";
import ESMESudria from "../../assets/Illustrations/ESMESudria.png";

interface EducationData {
	id: number;
	name: string;
	image: StaticImageData;
	tags: Array<String>;
	link: string;
	owner: string;
}

export const EDUCATION_DATA: EducationData[] = [
	{
		id: 100,
		name: "Formation C# / ASP.NET (2023)",
		image: NET7,
		tags: [
			"C# v11 (POO)",
			".NET 7",
			"Entity Framework",
			"LINQ",
			"SQL Server",
			"Docker",
		],
		link: "https://hts-learning.com/shop/course/infos/csharp",
		owner: "Christophe Mommer (Senior FullStack)",
	},
	{
		id: 200,
		name: "Formation NextJS (2022)",
		image: Ecosystem,
		tags: [
			"NextJS v13",
			"React v18",
			"TypeScript",
			"Zod",
			"React-Query",
			"Prisma",
			"NextAuth",
			"RTL / Jest",
		],
		link: "https://codelynx.dev/nextreact",
		owner: "Melvyn Malherbe (Senior FullStack)",
	},
	{
		id: 400,
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
		id: 500,
		name: "Formation React (2022)",
		image: Hooks,
		tags: [
			"React v18",
			"TypeScript",
			"Zod",
			"React-Query",
			"Prisma",
			"NextAuth",
			"RTL / Jest",
		],
		link: "https://codelynx.dev/nextreact",
		owner: "Melvyn Malherbe (Senior FullStack)",
	},
	{
		id: 600,
		name: "Formation Frontend (2022)",
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
		id: 700,
		name: "Formation Ingénieur (2017-20)",
		image: ESMESudria,
		tags: [
			"HTML",
			"CSS",
			"JavaScript",
			"C",
			"C# (POO)",
			"MySQL",
			"PHP",
			"Unix",
			"Réseau",
		],
		link: "https://www.esme.fr/formation-ingenieur/ingenieur-intelligence-artificielle",
		owner: "ESME Sudria (Ecole d'ingénieur)",
	},
];
