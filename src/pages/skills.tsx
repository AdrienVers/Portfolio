import Head from "next/head";
import styled from "@emotion/styled";
import Education from "../components/Formations/Education";
import Skill from "../components/Formations/Skill";

function Skills() {
	return (
		<SkillsGlobal>
			<Head>
				<title>Adrien Verschaere - Compétences</title>
				<meta
					name="description"
					content="Ensemble des compétences acquises en développement web"
				/>
				<link rel="icon" href="/icon.png" />
			</Head>
			<h1>Compétences techniques</h1>
			<Skill />
			<h1>Formations effectuées</h1>
			<Education />
		</SkillsGlobal>
	);
}

export default Skills;

const SkillsGlobal = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgb(207, 228, 250);
	margin-top: 70px;

	h1 {
		padding: 25px 0px 30px 0px;
		font-size: 2rem;
		margin: 0;
		color: black;
		font-weight: 600;

		@media (max-width: 520px) {
			font-size: 1.7rem;
			text-align: center;
		}

		@media (max-width: 400px) {
			font-size: 1.5rem;
			padding-top: 30px;
		}
	}
`;
