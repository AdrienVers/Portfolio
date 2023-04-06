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
			"Développement d'applications web responsives.",
			"Réflexion UX et UI lors du développement des interfaces.",
			"Conception, design et développement de features (simples à complexes).",
			"Contribution aux choix techniques (architectures et technologies).",
		],
	},
	{
		id: 2,
		name: "Qualité du code et tests fonctionnels",
		description: [
			"Production de code de qualité, maintenable et efficace.",
			"Typage, refactorisation et optimisation du code.",
			"Approche TDD, clean code et code coverage.",
			"Mise en place de tests unitaires, d'intégration et E2E.",
			"Maintien d'un haut niveau de qualité via des revues de code fréquentes.",
			"Vérification de la qualité du code (design patterns et maintenabilité).",
		],
	},
	{
		id: 3,
		name: "Intégration, maintenance et déploiement",
		description: [
			"Rédaction de la documentation associée au projet.",
			"Mise en place d'actions correctives lors de l'apparition de bugs.",
			"Livraisons régulières des fonctionnalités (processus agile).",
			"Intégration continue et versionning du code.",
			"Participation au suivi et à la maintenance des applications.",
			"Corrections applicatives et déploiement de nouvelles fonctionnalités.",
		],
	},
	{
		id: 4,
		name: "Performance et optimisation",
		description: [
			"Evaluation et amélioration des performances des interfaces utilisateurs.",
			"Optimisation du référencement naturel (SEO) pour améliorer la visibilité.",
			"Analyse des retours clients pour identifier les axes d'amélioration UI/UX.",
		],
	},
	{
		id: 5,
		name: "Gestion de projet et communication",
		description: [
			"Compréhension des besoins du client et des utilisateurs de l'application.",
			"Participation aux phases de conception, mise en œuvre et déploiement.",
			"Contribution aux réunions de brainstorming sur le design et l'architecture.",
			"Echanges réguliers avec les équipes (designers UI/UX, produit et tech).",
			"Gestion du travail avec l'équipe pour respecter les engagements collectifs.",
			"Veille technique et limitation de la dette technique.",
			"Transmission des connaissances pour faire progresser les équipes.",
		],
	},
];
