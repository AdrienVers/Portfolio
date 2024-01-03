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
import Agritech from "../../assets/Projects/Agritech.png";
import Cinematech from "../../assets/Projects/Cinematech.png";
import Emailing from "../../assets/Projects/Emailing.png";
import LittleSlayer from "../../assets/Projects/LittleSlayer.png";
import Angular from "../../assets/Logos/Angular.png";
import ASP from "../../assets/Logos/Asp.png";
import ChartJS from "../../assets/Logos/ChartJS.png";
import Csharp from "../../assets/Logos/Csharp.png";
import CSS from "../../assets/Logos/Css.png";
import DDD from "../../assets/Logos/DDD.png";
import EFCore from "../../assets/Logos/EFCore.png";
import Electron from "../../assets/Logos/Electron.png";
import Firebase from "../../assets/Logos/Firebase.png";
import GoogleDrive from "../../assets/Logos/GoogleDrive.png";
import HTML from "../../assets/Logos/Html.png";
import JavaScript from "../../assets/Logos/Javascript.png";
import Jest from "../../assets/Logos/Jest.png";
import MongoDB from "../../assets/Logos/Mongodb.png";
import NestJS from "../../assets/Logos/NestJS.png";
import NextJS from "../../assets/Logos/Next.png";
import NodeJS from "../../assets/Logos/NodeJS.png";
import NuxtJS from "../../assets/Logos/Nuxt.png";
import Prisma from "../../assets/Logos/Prisma.png";
import React from "../../assets/Logos/React.png";
import ReactThreeFiber from "../../assets/Logos/ReactThreeFiber.png";
import Redux from "../../assets/Logos/Redux.png";
import SEO from "../../assets/Logos/SEO.png";
import SCSS from "../../assets/Logos/Scss.png";
import Storybook from "../../assets/Logos/Storybook.png";
import TypeScript from "../../assets/Logos/Typescript.png";
import Unity from "../../assets/Logos/Unity.png";
import Vitest from "../../assets/Logos/Vitest.png";
import Vue from "../../assets/Logos/VueJS.png";
import Zustand from "../../assets/Logos/Zustand.png";
import CatMonitoring from "../../assets/Projects/CatMonitoring.png";
import Mongoose from "../../assets/Logos/Mongoose.png";
import XUnit from "../../assets/Logos/XUnit.png";
import { v4 as uuidv4 } from "uuid";

interface Tags {
  id: string;
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

let nextId = 1;

function generateId() {
  return nextId++;
}

export const PROJECT_DATA: ProjectData[] = [
  {
    id: generateId(),
    name: "Application d'emailing",
    image: Emailing,
    description:
      "Contribution à une application d'emailing utilisée par 40 000 clients. Réalisation de nouvelles fonctionnalités, maintenance et renforcement du code via des tests. Méthodologie agile avec une équipe de 10 personnes.",
    tags: [
      {
        id: uuidv4(),
        name: "React",
        logo: React,
      },
      {
        id: uuidv4(),
        name: "Redux",
        logo: Redux,
      },
      {
        id: uuidv4(),
        name: "NodeJS",
        logo: NodeJS,
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "Jest",
        logo: Jest,
      },
      {
        id: uuidv4(),
        name: "Storybook",
        logo: Storybook,
      },
    ],
    created: new Date(),
    url: "",
    title: "Emailing",
  },
  {
    id: generateId(),
    name: "Modèle du système solaire",
    image: SpaceOdyssey,
    description:
      "Modélisation 3D du système solaire et terrestre, offrant la possibilité d'accéder à des informations sur les différentes planètes et télescopes, en les sélectionnant ou en les recherchant via une barre de navigation.",
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
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "ReactThreeFiber",
        logo: ReactThreeFiber,
      },
      {
        id: uuidv4(),
        name: "NodeJS",
        logo: NodeJS,
      },
    ],
    created: new Date(),
    url: "https://space-odyssey.vercel.app/",
    title: "Space Odyssey",
  },
  {
    id: generateId(),
    name: "Application pour restaurant",
    image: Restaurant,
    description:
      "Application pour un restaurant gastronomique situé au plein cœur de la forêt du Livradois, Le Bois Savoureux, proposant des plats gourmands préparés avec des produits frais directement issus des forêts du Puy-de-Dôme.",
    tags: [
      {
        id: uuidv4(),
        name: "NuxtJS",
        logo: NuxtJS,
      },
      {
        id: uuidv4(),
        name: "Vue",
        logo: Vue,
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "SCSS",
        logo: SCSS,
      },
      {
        id: uuidv4(),
        name: "Vitest",
        logo: Vitest,
      },
      {
        id: uuidv4(),
        name: "SEO",
        logo: SEO,
      },
    ],
    created: new Date(),
    url: "https://le-bois-savoureux.vercel.app/",
    title: "Le Bois Savoureux",
  },
  {
    id: generateId(),
    name: "Cultures agricoles",
    image: Agritech,
    description:
      "Application conçue pour approfondir ses connaissances sur les cultures agricoles, en se concentrant sur 15 des espèces les plus répandues dans le domaine agricole.",
    tags: [
      {
        id: uuidv4(),
        name: "Angular",
        logo: Angular,
      },
      {
        id: uuidv4(),
        name: "ASP.NET",
        logo: ASP,
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "C#",
        logo: Csharp,
      },
      {
        id: uuidv4(),
        name: "XUnit",
        logo: XUnit,
      },
      {
        id: uuidv4(),
        name: "EF Core",
        logo: EFCore,
      },
    ],
    created: new Date(),
    url: "",
    title: "Cultures agricoles",
  },
  {
    id: generateId(),
    name: "Application de trading",
    image: DistrictMoney,
    description:
      "Application de trading permettant de s'initier au monde financier, en simulant notamment la gestion d'un portfeuille boursier au travers d'achat et de vente d'actions.",
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
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "Jest",
        logo: Jest,
      },
      {
        id: uuidv4(),
        name: "Zustand",
        logo: Zustand,
      },

      {
        id: uuidv4(),
        name: "Firebase",
        logo: Firebase,
      },
    ],
    created: new Date(),
    url: "https://district-money.vercel.app/",
    title: "District Money",
  },
  {
    id: generateId(),
    name: "Cinémathèque",
    image: Cinematech,
    description:
      "Application de bureau permettant de répertorier les films de sa cinémathèque personnelle, mais également de planifier les films à voir ou à commander.",
    tags: [
      {
        id: uuidv4(),
        name: "NextJS",
        logo: NextJS,
      },
      {
        id: uuidv4(),
        name: "NestJS",
        logo: NestJS,
      },
      {
        id: uuidv4(),
        name: "Electron",
        logo: Electron,
      },
      {
        id: uuidv4(),
        name: "Redux",
        logo: Redux,
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "DDD",
        logo: DDD,
      },
    ],
    created: new Date(),
    url: "",
    title: "Cinémathèque",
  },
  {
    id: generateId(),
    name: "Tableau de bord",
    image: CatMonitoring,
    description:
      "Application permettant de suivre l'évolution et la santé de son chat domestique, en analysant ses activités, comportements, ainsi que ses besoins alimentaires.",
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
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "SCSS",
        logo: SCSS,
      },
      {
        id: uuidv4(),
        name: "SEO",
        logo: SEO,
      },
    ],
    created: new Date(),
    url: "https://cat-monitoring.vercel.app/",
    title: "Cat Monitoring",
  },
  {
    id: generateId(),
    name: "Réseau social",
    image: Awayver,
    description:
      "Réseau social permettant de discuter, échanger des conseils ou des recommandations avec d'autres personnes et voyageurs à travers le monde.",
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
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "Jest",
        logo: Jest,
      },
      {
        id: uuidv4(),
        name: "MongoDB",
        logo: MongoDB,
      },
      {
        id: uuidv4(),
        name: "Mongoose",
        logo: Mongoose,
      },
    ],
    created: new Date(),
    url: "https://awayver.vercel.app/",
    title: "Awayver",
  },
  {
    id: generateId(),
    name: "Composition musicale",
    image: Songarden,
    description:
      "Réalisation d'une application permettant de composer ses propres mélodies en choisissant parmi une dizaine d'instruments et en visualisant les notes en temps réel.",
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
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "SCSS",
        logo: SCSS,
      },
      {
        id: uuidv4(),
        name: "Zustand",
        logo: Zustand,
      },
    ],
    created: new Date(),
    url: "https://songarden.vercel.app/",
    title: "Songarden",
  },
  {
    id: generateId(),
    name: "Application pour photographe",
    image: Photographie,
    description:
      "Réalisation d'une application facilitant le partage de photos prises lors d'un shooting. Les modèles peuvent ensuite sélectionner les photos à retoucher.",
    tags: [
      {
        id: uuidv4(),
        name: "React",
        logo: React,
      },
      {
        id: uuidv4(),
        name: "NodeJS",
        logo: NodeJS,
      },
      {
        id: uuidv4(),
        name: "GoogleDriveAPI",
        logo: GoogleDrive,
      },
    ],
    created: new Date(),
    url: "https://www.josephparisvisuals.com/",
    title: "Joseph Paris Visuals",
  },
  {
    id: generateId(),
    name: "Tableau de bord",
    image: Dashboard,
    description:
      "Application pour suivre les finances et projets d'une entreprise, ainsi que l'évolution des salariés au travers d'analyse de performances et compétences.",
    tags: [
      {
        id: uuidv4(),
        name: "Angular",
        logo: Angular,
      },
      {
        id: uuidv4(),
        name: "TypeScript",
        logo: TypeScript,
      },
      {
        id: uuidv4(),
        name: "ChartJS",
        logo: ChartJS,
      },
    ],
    created: new Date(),
    url: "https://dashboard-adrienvers.vercel.app/",
    title: "Tableau de bord",
  },
  {
    id: generateId(),
    name: "Application pour restaurant",
    image: Normand,
    description:
      "Application pour un restaurant, Le Normand Voyageur, proposant de nombreux plats rencontrés lors de mes différents voyages en Europe, Afrique et Amérique.",
    tags: [
      {
        id: uuidv4(),
        name: "React",
        logo: React,
      },
      {
        id: uuidv4(),
        name: "JavaScript",
        logo: JavaScript,
      },
      {
        id: uuidv4(),
        name: "Firebase",
        logo: Firebase,
      },
    ],
    created: new Date(),
    url: "https://adrienvers.github.io/site-de-e-commerce/",
    title: "Le Normand Voyageur",
  },
  {
    id: generateId(),
    name: "Clone de YouTube",
    image: Youtube,
    description:
      "Application permettant de visualiser les films qui sortiront prochainement au cinéma, les films les plus vus, le tout avec le design de la plateforme YouTube.",
    tags: [
      {
        id: uuidv4(),
        name: "React",
        logo: React,
      },
      {
        id: uuidv4(),
        name: "Firebase",
        logo: Firebase,
      },
    ],
    created: new Date(),
    url: "https://adrienvers.github.io/youtube-clone/",
    title: "Youtube Clone",
  },
  {
    id: generateId(),
    name: "Roue de la nourriture",
    image: Roue,
    description:
      "Site web proposant de lancer une roue qui déterminera (en fonction de la puissance de votre lancé) quel plat vous allez pouvoir déguster.",
    tags: [
      {
        id: uuidv4(),
        name: "HTML",
        logo: HTML,
      },
      {
        id: uuidv4(),
        name: "CSS",
        logo: CSS,
      },
      {
        id: uuidv4(),
        name: "JavaScript",
        logo: JavaScript,
      },
    ],
    created: new Date(),
    url: "https://adrienvers.github.io/Roue-de-la-fortune/",
    title: "Roue de la nourriture",
  },
  {
    id: generateId(),
    name: "Portes motorisées",
    image: Industrie,
    description:
      "Site web permettant de simuler l'ouverture et la fermeture de portes industrielles, mais aussi connaître les états de fermeture ou d'ouverture en temps réel.",
    tags: [
      {
        id: uuidv4(),
        name: "HTML",
        logo: HTML,
      },
      {
        id: uuidv4(),
        name: "CSS",
        logo: CSS,
      },
      {
        id: uuidv4(),
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
