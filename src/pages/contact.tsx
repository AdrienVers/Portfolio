import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";

function contact() {
	return (
		<ContactGlobal>
			<Head>
				<title>Adrien Verschaere - Contact</title>
				<meta name="description" content="Me contacter" />
				<link rel="icon" href="/icon.png" />
			</Head>
			<div className="contact-container">
				<a href="https://github.com/AdrienVers" target="_blank">
					<i className="fa-brands fa-github" /> : AdrienVers
				</a>
			</div>
			<div className="contact-container">
				<a
					href="https://www.linkedin.com/in/adrien-verschaere-595193152/"
					target="_blank"
				>
					<i
						style={{ color: "rgb(10,102,194)" }}
						className="fa-brands fa-linkedin"
					/>{" "}
					: Adrien Verschaere
				</a>
			</div>
		</ContactGlobal>
	);
}

export default contact;

const ContactGlobal = styled.div`
	height: 100svh;
	padding-top: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.contact-container {
		font-size: 2rem;
		padding: 10px;
	}
`;
