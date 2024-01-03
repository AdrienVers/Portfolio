import Head from "next/head";
import Service from "../components/Services/Service";
import styled from "@emotion/styled";

function Services() {
	return (
		<ServicesGlobal>
			<Head>
				<title>Adrien Verschaere - Services</title>
				<meta
					name="description"
					content="Ensemble des services proposés en informatique"
				/>
				<link rel="icon" href="/icon.png" />
			</Head>
			<Service />
		</ServicesGlobal>
	);
}

export default Services;

const ServicesGlobal = styled.div`
	padding-top: 70px;
	background-color: rgb(207, 228, 250);
`;
