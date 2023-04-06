import React from "react";
import styled from "@emotion/styled";

function contact() {
	return (
		<ContactGlobal>
			<div className="contact-container">
				<i className="fa-brands fa-github" /> :{" "}
				<a href="https://github.com/AdrienVers" target="_blank">
					AdrienVers
				</a>
			</div>
		</ContactGlobal>
	);
}

export default contact;

const ContactGlobal = styled.div`
	height: 100svh;
	// background-color: #f5f;
	padding-top: 70px;
	display: flex;
	justify-content: center;
	align-items: center;

	.contact-container {
		font-size: 2rem;
	}
`;
