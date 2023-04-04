import Head from "next/head";
import Project from "../components/Realisations/Project";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Adrien Verschaere - Réalisations</title>
				<meta name="description" content="Projets web réalisés" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Project />
		</div>
	);
}
