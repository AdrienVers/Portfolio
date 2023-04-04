import { StaticImageData } from "next/image";
import Awayver from "../../assets/Projects/Awayver.png";
import DistrictMoney from "../../assets/Projects/DistrictMoney.png";
import Industrie from "../../assets/Projects/Industrie.png";
import Photographie from "../../assets/Projects/Photographie.png";
import Roue from "../../assets/Projects/Roue.png";
import SpaceOdyssey from "../../assets/Projects/SpaceOdyssey.png";
import Youtube from "../../assets/Projects/Youtube.png";
import NormandVoyageur from "../../assets/Projects/NormandVoyageur.png";
import Songarden from "../../assets/Projects/Songarden.png";
import LittleSlayer from "../../assets/Projects/LittleSlayer.png";
import Csharp from "../../assets/Logos/Csharp.png";
import CSS from "../../assets/Logos/Css.png";
import Express from "../../assets/Logos/Express.png";
import Firebase from "../../assets/Logos/Firebase.png";
import FramerMotion from "../../assets/Logos/FramerMotion.png";
import GoogleDrive from "../../assets/Logos/GoogleDrive.png";
import GraphQL from "../../assets/Logos/Graphql.png";
import HTML from "../../assets/Logos/Html.png";
import JavaScript from "../../assets/Logos/Javascript.png";
import Jest from "../../assets/Logos/Jest.png";
import MongoDB from "../../assets/Logos/Mongodb.png";
import NextJS from "../../assets/Logos/Next.png";
import NextAuth from "../../assets/Logos/NextAuth.png";
import NodeJS from "../../assets/Logos/NodeJS.png";
import Prisma from "../../assets/Logos/Prisma.png";
import React from "../../assets/Logos/React.png";
import ReactQuery from "../../assets/Logos/ReactQuery.png";
import ReactThreeFiber from "../../assets/Logos/ReactThreeFiber.png";
import REST from "../../assets/Logos/Rest.png";
import SCSS from "../../assets/Logos/Scss.png";
import TypeScript from "../../assets/Logos/Typescript.png";
import Unity from "../../assets/Logos/Unity.png";
import Zustand from "../../assets/Logos/Zustand.png";

interface Tags {
	id: number;
	name: string;
	logo: StaticImageData;
}

interface ProjectData {
	id: number;
	name: string;
	description: string;
	image: StaticImageData;
	tags: Array<Tags>;
	created: Date;
	url: string;
	title: string;
}

export const PROJECT_DATA: ProjectData[] = [
	{
		id: 1,
		name: "Modélisation du système solaire",
		image: SpaceOdyssey,
		description:
			"Modélisation 3D du système solaire offrant la possibilité d'accéder à des informations sur les différentes planètes et télescopes, en les sélectionnant ou en les recherchant via une barre de navigation.",
		tags: [
			{
				id: 10,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 11,
				name: "React",
				logo: React,
			},
			{
				id: 12,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 13,
				name: "SCSS",
				logo: SCSS,
			},
			{
				id: 14,
				name: "ReactThreeFiber",
				logo: ReactThreeFiber,
			},
			{
				id: 15,
				name: "Zustand",
				logo: Zustand,
			},
			{
				id: 16,
				name: "REST",
				logo: REST,
			},
			{
				id: 17,
				name: "NodeJS",
				logo: NodeJS,
			},
			{
				id: 18,
				name: "Express",
				logo: Express,
			},
		],
		created: new Date(),
		url: "https://space-odyssey.vercel.app/",
		title: "Space Odyssey",
	},
	{
		id: 2,
		name: "Application de trading",
		image: DistrictMoney,
		description:
			"Application de trading permettant de s'initier au monde financier et à la Bourse, en simulant notamment la gestion d'un portfeuille boursier au travers d'achat et de vente d'actions,  mais sans avoir à risquer son argent.",
		tags: [
			{
				id: 20,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 21,
				name: "React",
				logo: React,
			},
			{
				id: 22,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 23,
				name: "SCSS",
				logo: SCSS,
			},
			{
				id: 24,
				name: "Zustand",
				logo: Zustand,
			},
			{
				id: 25,
				name: "Jest",
				logo: Jest,
			},
			{
				id: 26,
				name: "Firebase",
				logo: Firebase,
			},
			{
				id: 27,
				name: "REST",
				logo: REST,
			},
			{
				id: 28,
				name: "NodeJS",
				logo: NodeJS,
			},
		],
		created: new Date(),
		url: "https://district-money.vercel.app/",
		title: "District Money",
	},
	{
		id: 3,
		name: "Réseau social",
		image: Awayver,
		description:
			"Réseau social permettant de discuter, échanger des conseils ou des recommandations avec d'autres personnes à travers le monde et permettant de publier des photos ou expériences de voyages.",
		tags: [
			{
				id: 30,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 31,
				name: "React",
				logo: React,
			},
			{
				id: 32,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 33,
				name: "Jest",
				logo: Jest,
			},
			{
				id: 34,
				name: "MongoDB",
				logo: MongoDB,
			},
			{
				id: 35,
				name: "Prisma",
				logo: Prisma,
			},
			{
				id: 36,
				name: "NextAuth",
				logo: NextAuth,
			},
			{
				id: 37,
				name: "ReactQuery",
				logo: ReactQuery,
			},
			{
				id: 38,
				name: "GraphQL",
				logo: GraphQL,
			},
		],
		created: new Date(),
		url: "https://awayver.vercel.app/",
		title: "Awayver",
	},
	{
		id: 4,
		name: "Composition musicale",
		image: Songarden,
		description:
			"Réalisation d'une application permettant de composer ses propres mélodies en choisissant parmi une dizaine d'instruments et en visualisant les notes en temps réel.",
		tags: [
			{
				id: 40,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 41,
				name: "React",
				logo: React,
			},
			{
				id: 42,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 43,
				name: "Zustand",
				logo: Zustand,
			},
		],
		created: new Date(),
		url: "https://songarden.vercel.app/",
		title: "Songarden",
	},
	{
		id: 5,
		name: "Application pour photographe",
		image: Photographie,
		description:
			"Réalisation d'une application facilitant le partage de photos prises lors d'un shooting. Les modèles peuvent ensuite sélectionner les photos à retoucher.",
		tags: [
			{
				id: 50,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 51,
				name: "React",
				logo: React,
			},
			{
				id: 52,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 53,
				name: "NodeJS",
				logo: NodeJS,
			},
			{
				id: 54,
				name: "GoogleDriveAPI",
				logo: GoogleDrive,
			},
		],
		created: new Date(),
		url: "https://josephparisvisuals.vercel.app/",
		title: "Joseph Paris Visuals",
	},
	{
		id: 6,
		name: "Application pour restaurant",
		image: NormandVoyageur,
		description:
			"Application pour un restaurant, Le Normand Voyageur, proposant de nombreux plats rencontrés lors de mes différents voyages en Europe, Afrique et Amérique.",
		tags: [
			{
				id: 60,
				name: "React",
				logo: React,
			},
			{
				id: 61,
				name: "JavaScript",
				logo: JavaScript,
			},
			{
				id: 62,
				name: "FramerMotion",
				logo: FramerMotion,
			},
			{
				id: 63,
				name: "Firebase",
				logo: Firebase,
			},
		],
		created: new Date(),
		url: "https://adrienvers.github.io/site-de-e-commerce/",
		title: "Le Normand Voyageur",
	},
	{
		id: 7,
		name: "Clone de YouTube",
		image: Youtube,
		description:
			"Application permettant de visualiser les films qui sortiront prochainement au cinéma, les films les plus vus, le tout avec le design de la plateforme YouTube.",
		tags: [
			{
				id: 70,
				name: "React",
				logo: React,
			},
			{
				id: 71,
				name: "Firebase",
				logo: Firebase,
			},
		],
		created: new Date(),
		url: "https://adrienvers.github.io/youtube-clone/",
		title: "Youtube Clone",
	},
	{
		id: 8,
		name: "Roue de la nourriture",
		image: Roue,
		description:
			"Site web proposant de lancer une roue qui déterminera (en fonction de la puissance de votre lancé) quel plat vous allez déguster.",
		tags: [
			{
				id: 80,
				name: "HTML",
				logo: HTML,
			},
			{
				id: 81,
				name: "CSS",
				logo: CSS,
			},
			{
				id: 82,
				name: "JavaScript",
				logo: JavaScript,
			},
		],
		created: new Date(),
		url: "https://adrienvers.github.io/Roue-de-la-fortune/",
		title: "Roue de la nourriture",
	},
	{
		id: 9,
		name: "Portes motorisées",
		image: Industrie,
		description:
			"Site web permettant de simuler l'ouverture et la fermeture de portes industrielles, mais aussi connaître les états de fermeture ou d'ouverture en temps réel.",
		tags: [
			{
				id: 90,
				name: "HTML",
				logo: HTML,
			},
			{
				id: 91,
				name: "CSS",
				logo: CSS,
			},
			{
				id: 92,
				name: "JavaScript",
				logo: JavaScript,
			},
		],
		created: new Date(),
		url: "https://adrienvers.github.io/IHM-Industrielle/",
		title: "IHM Industrielle",
	},
	{
		id: 10,
		name: "Jeu de stratégie",
		image: LittleSlayer,
		description:
			"Jeu de stratégie permettant aux joueurs d'incarner un personnage nain et de profiter d'une large sélection d'armes amusantes. En jouant à ce jeu, les utilisateurs doivent utiliser leur intelligence pour gagner.",
		tags: [
			{
				id: 100,
				name: "Unity",
				logo: Unity,
			},
			{
				id: 101,
				name: "Csharp",
				logo: Csharp,
			},
		],
		created: new Date(),
		url: "https://github.com/AdrienVers/Little-Slayer",
		title: "Little Slayer",
	},
];
