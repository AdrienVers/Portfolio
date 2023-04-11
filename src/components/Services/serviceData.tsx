interface ServiceData {
	id: number;
	name: string;
	description: Array<string>;
}

export const SERVICE_DATA: ServiceData[] = [
	{
		id: 1,
		name: "Conception et développement informatique",
		description: [
			"Développement d'applications web modernes et intuitives qui s'adaptent aux différents écrans (ordinateurs, tablettes, mobiles).",
			"Gestion des utilisateurs (création de comptes, authentification, connexion sécurisée, tableau de bord, programmes de fidélité, etc..).",
			"Développement de solutions e-commerce permettant de vendre des produits et/ou des services.",
			"Création de graphiques dynamiques permettant de visualiser différentes données de manière interactive.",
			"Mise en place de messageries instantanées facilitant les échanges entre utilisateurs ou avec le service client.",
			"Intégration de différents outils (traduction, paiement sécurisé, etc..).",
			"Développement de fonctionnalités spécifiques (formulaires de contact, calendriers de réservation, jeux interactifs, etc..).",
		],
	},
	{
		id: 2,
		name: "Qualité du code et tests fonctionnels",
		description: [
			"Production de code de qualité, maintenable et efficace.",
			"Pratique du clean code (typage fort, refactorisation, optimisation du code) et code coverage.",
			"Approche TDD (Test Driven Development) afin de répondre correctement aux spécifications et faciliter la maintenance.",
			"Mise en place de différents types de tests afin de garantir la qualité du code (tests unitaires, d'intégration et E2E).",
			"Maintien d'un haut niveau de qualité via des revues de code fréquentes avec les équipes de développement.",
			"Vérification de la qualité du code (design patterns et maintenabilité).",
		],
	},
	{
		id: 3,
		name: "Intégration, maintenance et déploiement",
		description: [
			"Rédaction de la documentation complète et claire associée au projet facilitant sa maintenance.",
			"Mise en place d'actions correctives en cas d'apparition de bugs ou de régrétion.",
			"Livraisons régulières des fonctionnalités et collaboration étroite avec le client (processus agile).",
			"Intégration continue, versionning du code et collaboration avec les équipes afin de s'assurer que le code est toujours fonctionnel.",
			"Participation au suivi et à la maintenance des applications afin de garantir la satisfaction des utilisateurs.",
			"Corrections applicatives et déploiement de nouvelles fonctionnalités.",
		],
	},
	{
		id: 4,
		name: "Performance et optimisation",
		description: [
			"Evaluation et amélioration des performances des interfaces utilisateurs (vitesse de chargement, convivialité, navigation, etc..).",
			"Optimisation du référencement naturel (SEO) pour améliorer la visibilité sur les résultats de recherche.",
			"Analyse des retours clients pour identifier les axes d'amélioration UI/UX.",
		],
	},
	{
		id: 5,
		name: "Gestion de projet et communication",
		description: [
			"Compréhension des besoins du client et des utilisateurs, participation à la conception, mise en œuvre et déploiement de l'application.",
			"Contribution aux réunions de brainstorming sur le design et l'architecture afin de garantir que l'application soit fonctionnelle et conviviale.",
			"Echanges réguliers avec les équipes (designers UI/UX, produit et tech) afin que chaque tâche soit alignée sur les objectifs du projet.",
			"Gestion du travail avec l'équipe pour respecter les engagements collectifs et délais impartis.",
			"Veille technique et mise en place de bonnes pratiques afin de limitater la dette technique.",
			"Partage et transmission des connaissances pour faire progresser les équipes.",
		],
	},
];
