import Head from "next/head";
import Project from "../components/Realisations/Project";
import styled from "@emotion/styled";

export default function Home() {
	return (
		<HomeGlobal>
			<Head>
				<title>Adrien Verschaere - Réalisations</title>
				<meta name="description" content="Projets web réalisés" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Project />
		</HomeGlobal>
	);
}

const HomeGlobal = styled.div`
	margin-top: 70px;
`;
