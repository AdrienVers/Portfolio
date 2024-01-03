interface BoldedDescription {
	text: string;
	bold: string[];
}

export type DescriptionItem = string | BoldedDescription;

interface ServiceData {
	id: number;
	name: string;
	description: DescriptionItem[];
}

export const SERVICE_DATA: ServiceData[] = [
	{
		id: 1,
		name: "Conception et développement informatique",
		description: [
			"Développement d'applications web modernes et intuitives qui s'adaptent aux différents écrans (ordinateurs, tablettes, mobiles).",
			{
				text: "Gestion des utilisateurs (création de comptes, authentification, connexion sécurisée, tableau de bord, programmes de fidélité, etc..).",
				bold: ["authentification", "connexion sécurisée"]
			},
			"Développement de solutions e-commerce permettant de vendre des produits et/ou des services.",
			"Création de graphiques dynamiques permettant de visualiser différentes données de manière interactive.",
			{
				text: "Mise en place de messageries instantanées facilitant les échanges entre utilisateurs ou avec le service client.",
				bold: ["messageries instantanées"]
			},
			{
				text: "Intégration de différents outils (traduction, paiement sécurisé, etc..).",
				bold: ["traduction"]
			},
			"Développement de fonctionnalités spécifiques (formulaires de contact, calendriers de réservation, jeux interactifs, etc..).",
		],
	},
	{
		id: 2,
		name: "Qualité du code et tests fonctionnels",
		description: [
			{
				text: "Production de code de qualité, maintenable et efficace.",
				bold: ["code", "maintenable"]
			},
			{
				text: "Pratique du clean code (typage fort, refactorisation, optimisation du code) et code coverage.",
				bold: ["optimisation du code"],
			},
			{
				text: "Approche TDD (Test Driven Development) afin de répondre correctement aux spécifications et faciliter la maintenance.",
				bold: ["TDD"]
			},
			{
				text: "Mise en place de différents types de tests afin de garantir la qualité du code (tests unitaires, d'intégration et E2E).",
				bold: ["tests unitaires"]
			},
			{
				text: "Maintien d'un haut niveau de qualité via des revues de code fréquentes avec les équipes de développement.",
				bold: ["revues de code"]
			},
			{
				text: "Vérification de la qualité du code (design patterns et maintenabilité).",
				bold: ["design patterns"]
			}
		],
	},
	{
		id: 3,
		name: "Intégration, maintenance et déploiement",
		description: [
			{
				text: "Rédaction de la documentation complète et claire associée au projet facilitant sa maintenance.",
				bold: ["documentation"],
			},
			"Mise en place d'actions correctives en cas d'apparition de bugs ou de régrétion.",
			{
				text: "Livraisons régulières des fonctionnalités et collaboration étroite avec le client (processus agile).",
				bold: ["livraisons régulières"]
			},
			{
				text: "Intégration continue, versionning du code et collaboration avec les équipes afin de s'assurer que le code est toujours fonctionnel.",
				bold: ["collaboration avec les équipes"]
			},
			"Participation au suivi et à la maintenance des applications afin de garantir la satisfaction des utilisateurs.",
			{
				text: "Corrections applicatives et déploiement de nouvelles fonctionnalités.",
				bold: ["déploiement de nouvelles fonctionnalités"]
			}
		],
	},
	{
		id: 4,
		name: "Performance et optimisation",
		description: [
			{
				text: "Evaluation et amélioration des performances des interfaces utilisateurs (vitesse de chargement, convivialité, navigation, etc..).",
				bold: ["amélioration des performances", "vitesse de chargement"]
			},
			"Optimisation du référencement naturel (SEO) pour améliorer la visibilité sur les résultats de recherche.",
			{
				text: "Analyse des retours clients pour identifier les axes d'amélioration UI/UX.",
				bold: ["amélioration UI/UX"]
			}
		],
	},
	{
		id: 5,
		name: "Gestion de projet et communication",
		description: [
			{
				text: "Compréhension des besoins du client et des utilisateurs, participation à la conception, mise en œuvre et déploiement de l'application.",
				bold: ["compréhension des besoins du client"]
			},
			{
				text: "Contribution aux réunions de brainstorming sur le design et l'architecture afin de garantir que l'application soit fonctionnelle et conviviale.",
				bold: ["design", "architecture"]
			},
			{
				text: "Echanges réguliers avec les équipes (designers UI/UX, produit et tech) afin que chaque tâche soit alignée sur les objectifs du projet.",
				bold: ["Echanges réguliers avec les équipes"],
			},
			"Gestion du travail avec l'équipe pour respecter les engagements collectifs et délais impartis.",
			{
				text: "Veille technique et mise en place de bonnes pratiques afin de limitater la dette technique.",
				bold: ["Veille technique", "bonnes pratiques"]
			},
			"Partage et transmission des connaissances pour faire progresser les équipes.",
		],
	},
];
