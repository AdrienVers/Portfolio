import { StaticImageData } from "next/image";
import Awayver from "../../assets/Projects/Awayver.png";
import DistrictMoney from "../../assets/Projects/DistrictMoney.png";
import Industrie from "../../assets/Projects/Industrie.png";
import Photographie from "../../assets/Projects/Photographie.png";
import Roue from "../../assets/Projects/Roue.png";
import SpaceOdyssey from "../../assets/Projects/SpaceOdyssey.png";
import Youtube from "../../assets/Projects/Youtube.png";
import Normand from "../../assets/Projects/Normand.png";
import Restaurant from "../../assets/Projects/Restaurant.png";
import Dashboard from "../../assets/Projects/Dashboard.png";
import Songarden from "../../assets/Projects/Songarden.png";
import LittleSlayer from "../../assets/Projects/LittleSlayer.png";
import Angular from "../../assets/Logos/Angular.png";
import ChartJS from "../../assets/Logos/ChartJS.png";
import Csharp from "../../assets/Logos/Csharp.png";
import CSS from "../../assets/Logos/Css.png";
import Firebase from "../../assets/Logos/Firebase.png";
import GoogleDrive from "../../assets/Logos/GoogleDrive.png";
import HTML from "../../assets/Logos/Html.png";
import JavaScript from "../../assets/Logos/Javascript.png";
import Jest from "../../assets/Logos/Jest.png";
import MongoDB from "../../assets/Logos/Mongodb.png";
import NextJS from "../../assets/Logos/Next.png";
import NodeJS from "../../assets/Logos/NodeJS.png";
import NuxtJS from "../../assets/Logos/Nuxt.png";
import Prisma from "../../assets/Logos/Prisma.png";
import React from "../../assets/Logos/React.png";
import ReactThreeFiber from "../../assets/Logos/ReactThreeFiber.png";
import SEO from "../../assets/Logos/SEO.png";
import SCSS from "../../assets/Logos/Scss.png";
import TypeScript from "../../assets/Logos/Typescript.png";
import Unity from "../../assets/Logos/Unity.png";
import Vitest from "../../assets/Logos/Vitest.png";
import Vue from "../../assets/Logos/VueJS.png";
import Zustand from "../../assets/Logos/Zustand.png";
import CatMonitoring from "../../assets/Projects/CatMonitoring.png";

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
		id: 7,
		name: "Application pour restaurant",
		image: Restaurant,
		description:
			"Application pour un restaurant gastronomique situé au plein cœur de la forêt du Livradois, Le Bois Savoureux, proposant des plats gourmands préparés avec des produits frais directement issus des forêts du Puy-de-Dôme.",
		tags: [
			{
				id: 20,
				name: "NuxtJS",
				logo: NuxtJS,
			},
			{
				id: 21,
				name: "Vue",
				logo: Vue,
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
				name: "Vitest",
				logo: Vitest,
			},
			{
				id: 25,
				name: "SEO",
				logo: SEO,
			},
		],
		created: new Date(),
		url: "https://le-bois-savoureux.vercel.app/",
		title: "Le Bois Savoureux",
	},
	{
		id: 8,
		name: "Modèle du système solaire",
		image: SpaceOdyssey,
		description:
			"Modélisation 3D du système solaire et terrestre, offrant la possibilité d'accéder à des informations sur les différentes planètes et télescopes, en les sélectionnant ou en les recherchant via une barre de navigation.",
		tags: [
			{
				id: 10000,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 11000,
				name: "React",
				logo: React,
			},
			{
				id: 12000,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 14000,
				name: "ReactThreeFiber",
				logo: ReactThreeFiber,
			},
			{
				id: 17000,
				name: "NodeJS",
				logo: NodeJS,
			},
		],
		created: new Date(),
		url: "https://space-odyssey.vercel.app/",
		title: "Space Odyssey",
	},

	{
		id: 9,
		name: "Application de trading",
		image: DistrictMoney,
		description:
			"Application de trading permettant de s'initier au monde financier et à la Bourse, en simulant notamment la gestion d'un portfeuille boursier au travers d'achat et de vente d'actions,  mais sans avoir à risquer son argent.",
		tags: [
			{
				id: 120,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 121,
				name: "React",
				logo: React,
			},
			{
				id: 122,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 124,
				name: "Jest",
				logo: Jest,
			},
			{
				id: 125,
				name: "Zustand",
				logo: Zustand,
			},

			{
				id: 126,
				name: "Firebase",
				logo: Firebase,
			},
		],
		created: new Date(),
		url: "https://district-money.vercel.app/",
		title: "District Money",
	},
	{
		id: 6,
		name: "Tableau de bord",
		image: CatMonitoring,
		description:
			"Application permettant de suivre l'évolution et la santé de son chat domestique, en analysant ses activités, comportements, ainsi que ses besoins alimentaires.",
		tags: [
			{
				id: 1400,
				name: "NextJS",
				logo: NextJS,
			},
			{
				id: 1401,
				name: "React",
				logo: React,
			},
			{
				id: 1402,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 1403,
				name: "SCSS",
				logo: SCSS,
			},
			{
				id: 1404,
				name: "SEO",
				logo: SEO,
			},
		],
		created: new Date(),
		url: "https://cat-monitoring.vercel.app/",
		title: "Cat Monitoring",
	},
	{
		id: 10,
		name: "Réseau social",
		image: Awayver,
		description:
			"Réseau social permettant de discuter, échanger des conseils ou des recommandations avec d'autres personnes et voyageurs à travers le monde.",
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
		],
		created: new Date(),
		url: "https://awayver.vercel.app/",
		title: "Awayver",
	},
	{
		id: 11,
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
				name: "SCSS",
				logo: SCSS,
			},
			{
				id: 44,
				name: "Zustand",
				logo: Zustand,
			},
		],
		created: new Date(),
		url: "https://songarden.vercel.app/",
		title: "Songarden",
	},
	{
		id: 12,
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
		id: 13,
		name: "Tableau de bord",
		image: Dashboard,
		description:
			"Application pour suivre les finances et projets d'une entreprise, ainsi que l'évolution des salariés au travers d'analyse de performances et compétences.",
		tags: [
			{
				id: 170,
				name: "Angular",
				logo: Angular,
			},
			{
				id: 171,
				name: "TypeScript",
				logo: TypeScript,
			},
			{
				id: 172,
				name: "ChartJS",
				logo: ChartJS,
			},
		],
		created: new Date(),
		url: "https://dashboard-adrienvers.vercel.app/",
		title: "Tableau de bord",
	},
	{
		id: 14,
		name: "Application pour restaurant",
		image: Normand,
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
		id: 15,
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
		id: 16,
		name: "Roue de la nourriture",
		image: Roue,
		description:
			"Site web proposant de lancer une roue qui déterminera (en fonction de la puissance de votre lancé) quel plat vous allez pouvoir déguster.",
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
		id: 17,
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
	/*
	{
		id: 18,
		name: "Jeu de stratégie",
		image: LittleSlayer,
		description:
			"Jeu de stratégie permettant aux joueurs d'incarner un personnage nain et de profiter d'une large sélection d'armes amusantes et stratégiques.",
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
	*/
];
