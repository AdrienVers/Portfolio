import { StaticImageData } from "next/image";
import Angular from "../../assets/Logos/Angular.png";
import ASP from "../../assets/Logos/Asp.png";
import Azure from "../../assets/Logos/Azure.png";
import Csharp from "../../assets/Logos/Csharp.png";
import Cypress from "../../assets/Logos/Cypress.png";
import Docker from "../../assets/Logos/Docker.png";
import Express from "../../assets/Logos/Express.png";
import Firebase from "../../assets/Logos/Firebase.png";
import Firestore from "../../assets/Logos/Firestore.png";
import Github from "../../assets/Logos/Github.png";
import GraphQL from "../../assets/Logos/Graphql.png";
import HTML from "../../assets/Logos/Html.png";
import Jasmine from "../../assets/Logos/Jasmine.png";
import JavaScript from "../../assets/Logos/Javascript.png";
import Jest from "../../assets/Logos/Jest.png";
import Jira from "../../assets/Logos/Jira.png";
import Kanban from "../../assets/Logos/Kanban.png";
import MASK from "../../assets/Logos/MASK.png";
import MongoDB from "../../assets/Logos/Mongodb.png";
import Mongoose from "../../assets/Logos/Mongoose.png";
import MySQL from "../../assets/Logos/Mysql.png";
import NextJS from "../../assets/Logos/Next.png";
import NextAuth from "../../assets/Logos/NextAuth.png";
import NodeJS from "../../assets/Logos/NodeJS.png";
import PostgreSQL from "../../assets/Logos/Postgresql.png";
import Prisma from "../../assets/Logos/Prisma.png";
import React from "../../assets/Logos/React.png";
import Redux from "../../assets/Logos/Redux.png";
import ReactQuery from "../../assets/Logos/ReactQuery.png";
import REST from "../../assets/Logos/Rest.png";
import Scrum from "../../assets/Logos/Scrum.png";
import SCSS from "../../assets/Logos/Scss.png";
import SEO from "../../assets/Logos/SEO.png";
import TypeScript from "../../assets/Logos/Typescript.png";
import UX from "../../assets/Logos/Ux.png";
import VueJS from "../../assets/Logos/VueJS.png";
import Zustand from "../../assets/Logos/Zustand.png";

interface Tag {
	id: number;
	name: string;
	logo: StaticImageData;
}

interface SkillData {
	id: number;
	name: string;
	tags: Array<Tag>;
}

export const FRONTEND_DATA: SkillData[] = [
	{
		id: 110,
		name: "Languages",
		tags: [
			{
				id: 111,
				name: "HTML",
				logo: HTML,
			},
			{
				id: 112,
				name: "SCSS",
				logo: SCSS,
			},
			{
				id: 113,
				name: "JavaScript",
				logo: JavaScript,
			},
			{
				id: 114,
				name: "TypeScript",
				logo: TypeScript,
			},
		],
	},
	{
		id: 210,
		name: "Gestion des états",
		tags: [
			{
				id: 211,
				name: "Redux",
				logo: Redux,
			},
			{
				id: 212,
				name: "Zustand",
				logo: Zustand,
			},
		],
	},
	{
		id: 310,
		name: "API",
		tags: [
			{
				id: 311,
				name: "REST",
				logo: REST,
			},
			{
				id: 312,
				name: "GraphQL",
				logo: GraphQL,
			},
			{
				id: 313,
				name: "React-Q",
				logo: ReactQuery,
			},
		],
	},
	{
		id: 410,
		name: "Frameworks",
		tags: [
			{
				id: 411,
				name: "React",
				logo: React,
			},
			{
				id: 412,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 413,
				name: "Angular",
				logo: Angular,
			},
			{
				id: 414,
				name: "VueJS",
				logo: VueJS,
			},
		],
	},
	{
		id: 510,
		name: "Authentification",
		tags: [
			{
				id: 511,
				name: "Firebase",
				logo: Firebase,
			},
			{
				id: 512,
				name: "NextAuth",
				logo: NextAuth,
			},
		],
	},
	{
		id: 610,
		name: "Tests",
		tags: [
			{
				id: 611,
				name: "RTL / Jest",
				logo: Jest,
			},
			{
				id: 612,
				name: "Jasmine",
				logo: Jasmine,
			},
			{
				id: 613,
				name: "Cypress",
				logo: Cypress,
			},
		],
	},
];

export const BACKEND_DATA: SkillData[] = [
	{
		id: 120,
		name: "Languages",
		tags: [
			{
				id: 121,
				name: "NodeJS",
				logo: NodeJS,
			},
			{
				id: 122,
				name: "C++ / C#",
				logo: Csharp,
			},
		],
	},
	{
		id: 220,
		name: "Frameworks",
		tags: [
			{
				id: 221,
				name: "Express",
				logo: Express,
			},
			{
				id: 222,
				name: "ASP.NET",
				logo: ASP,
			},
		],
	},
];

export const BDD_DATA: SkillData[] = [
	{
		id: 130,
		name: "ORM",
		tags: [
			{
				id: 131,
				name: "Mongoose",
				logo: Mongoose,
			},
			{
				id: 132,
				name: "Prisma",
				logo: Prisma,
			},
		],
	},
	{
		id: 230,
		name: "SQL",
		tags: [
			{
				id: 231,
				name: "MySQL",
				logo: MySQL,
			},
			{
				id: 232,
				name: "PostgreSQL",
				logo: PostgreSQL,
			},
		],
	},
	{
		id: 330,
		name: "NoSQL",
		tags: [
			{
				id: 331,
				name: "MongoDB",
				logo: MongoDB,
			},
			{
				id: 332,
				name: "Firestore",
				logo: Firestore,
			},
		],
	},
];

export const DEVOPS_DATA: SkillData[] = [
	{
		id: 140,
		name: "Cloud",
		tags: [
			{
				id: 141,
				name: "Firebase",
				logo: Firebase,
			},
			{
				id: 143,
				name: "Azure",
				logo: Azure,
			},
		],
	},
	{
		id: 240,
		name: "Conteneurs",
		tags: [
			{
				id: 241,
				name: "Docker",
				logo: Docker,
			},
		],
	},
	{
		id: 340,
		name: "CI/CD",
		tags: [
			{
				id: 341,
				name: "GitHub",
				logo: Github,
			},
		],
	},
];

export const PROJECT_DATA: SkillData[] = [
	{
		id: 150,
		name: "Méthodes",
		tags: [
			{
				id: 151,
				name: "Scrum",
				logo: Scrum,
			},
			{
				id: 152,
				name: "Kanban",
				logo: Kanban,
			},
			{
				id: 153,
				name: "MASK",
				logo: MASK,
			},
		],
	},
	{
		id: 250,
		name: "Utilisateur",
		tags: [
			{
				id: 251,
				name: "UI / UX",
				logo: UX,
			},
			{
				id: 252,
				name: "SEO",
				logo: SEO,
			},
		],
	},
	{
		id: 350,
		name: "Outils",
		tags: [
			{
				id: 351,
				name: "Jira",
				logo: Jira,
			},
		],
	},
];
