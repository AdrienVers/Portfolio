import { StaticImageData } from "next/image";
import Angular from "../../assets/Logos/Angular.png";
import ASP from "../../assets/Logos/Asp.png";
import Csharp from "../../assets/Logos/Csharp.png";
import Cypress from "../../assets/Logos/Cypress.png";
import DDD from "../../assets/Logos/DDD.png";
import Docker from "../../assets/Logos/Docker.png";
import EFCore from "../../assets/Logos/EFCore.png";
// import Express from "../../assets/Logos/Express.png";
import Firebase from "../../assets/Logos/Firebase.png";
import Firestore from "../../assets/Logos/Firestore.png";
import Github from "../../assets/Logos/Github.png";
import GraphQL from "../../assets/Logos/Graphql.png";
import HTML from "../../assets/Logos/Html.png";
import JavaScript from "../../assets/Logos/Javascript.png";
import Jest from "../../assets/Logos/Jest.png";
import Jira from "../../assets/Logos/Jira.png";
import Kanban from "../../assets/Logos/Kanban.png";
import MASK from "../../assets/Logos/MASK.png";
import MongoDB from "../../assets/Logos/Mongodb.png";
import Mongoose from "../../assets/Logos/Mongoose.png";
import NestJS from "../../assets/Logos/NestJS.png";
import NextJS from "../../assets/Logos/Next.png";
import NextAuth from "../../assets/Logos/NextAuth.png";
import NodeJS from "../../assets/Logos/NodeJS.png";
import PostgreSQL from "../../assets/Logos/Postgresql.png";
import Prisma from "../../assets/Logos/Prisma.png";
import React from "../../assets/Logos/React.png";
import Redux from "../../assets/Logos/Redux.png";
import REST from "../../assets/Logos/Rest.png";
import Scrum from "../../assets/Logos/Scrum.png";
import SCSS from "../../assets/Logos/Scss.png";
import SEO from "../../assets/Logos/SEO.png";
import Sqlite from "../../assets/Logos/Sqlite.png";
import Swagger from "../../assets/Logos/Swagger.png";
import TypeScript from "../../assets/Logos/Typescript.png";
import UX from "../../assets/Logos/Ux.png";
import VueJS from "../../assets/Logos/VueJS.png";
import XUnit from "../../assets/Logos/XUnit.png"
import Zustand from "../../assets/Logos/Zustand.png";

import { v4 as uuidv4 } from "uuid";

interface Tag {
	id: string;
	name: string;
	logo: StaticImageData;
	isBold?: boolean;
}

interface SkillData {
	id: number;
	name: string;
	tags: Array<Tag>;
}

let nextId = 1;

function generateId() {
  return nextId++;
}

export const FRONTEND_DATA: SkillData[] = [
	{
		id: generateId(),
		name: "Languages",
		tags: [
			{
				id: uuidv4(),
				name: "HTML",
				logo: HTML,
			},
			{
				id: uuidv4(),
				name: "SCSS",
				logo: SCSS,
			},
			{
				id: uuidv4(),
				name: "JavaScript",
				logo: JavaScript,
			},
			{
				id: uuidv4(),
				name: "TypeScript",
				logo: TypeScript,
				isBold : true,
			},
		],
	},
	{
		id: generateId(),
		name: "Gestion des états",
		tags: [
			{
				id: uuidv4(),
				name: "Zustand",
				logo: Zustand,
			},
			{
				id: uuidv4(),
				name: "Redux",
				logo: Redux,
				isBold : true,
			},
		],
	},
	{
		id: generateId(),
		name: "API",
		tags: [
			{
				id: uuidv4(),
				name: "REST",
				logo: REST,
			},
			{
				id: uuidv4(),
				name: "GraphQL",
				logo: GraphQL,
			},
		],
	},
	{
		id: generateId(),
		name: "Frameworks",
		tags: [
			{
				id: uuidv4(),
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: uuidv4(),
				name: "React",
				logo: React,
				isBold : true,
			},
			{
				id: uuidv4(),
				name: "Angular",
				logo: Angular,
				isBold : true,
			},
			{
				id: uuidv4(),
				name: "VueJS",
				logo: VueJS,
			},
		],
	},
	{
		id: generateId(),
		name: "Authentification",
		tags: [
			{
				id: uuidv4(),
				name: "Firebase",
				logo: Firebase,
			},
			{
				id: uuidv4(),
				name: "NextAuth",
				logo: NextAuth,
			},
		],
	},
	{
		id: generateId(),
		name: "Tests",
		tags: [
			{
				id: uuidv4(),
				name: "RTL / Jest",
				logo: Jest,
				isBold : true,
			},
			{
				id: uuidv4(),
				name: "Cypress",
				logo: Cypress,
			},
		],
	},
];

export const BACKEND_DATA: SkillData[] = [
	{
		id: generateId(),
		name: "Languages",
		tags: [
			{
				id: uuidv4(),
				name: "NodeJS",
				logo: NodeJS,
			},
			{
				id: uuidv4(),
				name: "C++ / C#",
				logo: Csharp,
			},
		],
	},
	{
		id: generateId(),
		name: "Frameworks",
		tags: [
			{
				id: uuidv4(),
				name: "NestJS",
				logo: NestJS,
			},
			{
				id: uuidv4(),
				name: "ASP.NET",
				logo: ASP,
				isBold : true,
			},
		],
	},
	{
		id : generateId(),
		name : "Tests",
		tags : [
			{
				id : uuidv4(),
				name : "XUnit",
				logo : XUnit
			}
		]
	},
	{
		id: generateId(),
		name: "Documentation",
		tags: [
			{
				id: uuidv4(),
				name: "Swagger",
				logo: Swagger,
			},
		],
	},
];

export const BDD_DATA: SkillData[] = [
	{
		id: generateId(),
		name: "ORM",
		tags: [
			{
				id: uuidv4(),
				name: "Mongoose",
				logo: Mongoose,
			},
			{
				id: uuidv4(),
				name: "Prisma",
				logo: Prisma,
				isBold : true,
			},
			{
				id: uuidv4(),
				name: "EF Core",
				logo: EFCore,
			}
		],
	},
	{
		id: generateId(),
		name: "SQL",
		tags: [
			{
				id: uuidv4(),
				name: "SQLite",
				logo: Sqlite,
			},
			{
				id: uuidv4(),
				name: "PostgreSQL",
				logo: PostgreSQL,
			},
		],
	},
	{
		id: generateId(),
		name: "NoSQL",
		tags: [
			{
				id: uuidv4(),
				name: "MongoDB",
				logo: MongoDB,
			},
			{
				id: uuidv4(),
				name: "Firestore",
				logo: Firestore,
			},
		],
	},
];

export const DEVOPS_DATA: SkillData[] = [
	{
		id: generateId(),
		name: "Cloud",
		tags: [
			{
				id: uuidv4(),
				name: "Firebase",
				logo: Firebase,
			},
		],
	},
	{
		id: generateId(),
		name: "Conteneurs",
		tags: [
			{
				id: uuidv4(),
				name: "Docker",
				logo: Docker,
			},
		],
	},
	{
		id: generateId(),
		name: "CI/CD",
		tags: [
			{
				id: uuidv4(),
				name: "GitHub",
				logo: Github,
			},
		],
	},
];

export const PROJECT_DATA: SkillData[] = [
	{
		id: generateId(),
		name: "Méthodes",
		tags: [
			{
				id: uuidv4(),
				name: "Scrum",
				logo: Scrum,
			},
			{
				id: uuidv4(),
				name: "Kanban",
				logo: Kanban,
			},
			{
				id: uuidv4(),
				name: "MASK",
				logo: MASK,
			},
			{
				id: uuidv4(),
				name: "DDD",
				logo: DDD,
				isBold : true,
			}
		],
	},
	{
		id: generateId(),
		name: "Utilisateur",
		tags: [
			{
				id: uuidv4(),
				name: "UI / UX",
				logo: UX,
				isBold : true,
			},
			{
				id: uuidv4(),
				name: "SEO",
				logo: SEO,
			},
		],
	},
	{
		id: generateId(),
		name: "Outils",
		tags: [
			{
				id: uuidv4(),
				name: "Jira",
				logo: Jira,
			},
		],
	},
];
