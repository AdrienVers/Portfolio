import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { EDUCATION_DATA } from "./educationData";

function Education() {
	return (
		<EducationGlobal>
			{EDUCATION_DATA.map((item) => {
				return (
					<div key={item.id} className="formation-column">
						<h2>{item.name}</h2>
						<Image
							className="formation-image"
							src={item.image}
							alt={item.name}
						/>
						<p className="items">
							{item.tags.map((tag, i) => {
								return (
									<React.Fragment key={i}>
										<span>{tag}</span>
										{i !== item.tags.length - 1 && ",\u00a0"}
									</React.Fragment>
								);
							})}
							{"."}
						</p>
						<p className="formation-link">
							<a href={item.link} target="_blank">
								Proposée par {item.owner}.
								<i className="fa-solid fa-arrow-up-right-from-square" />
							</a>
						</p>
					</div>
				);
			})}
		</EducationGlobal>
	);
}

export default Education;

const EducationGlobal = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	row-gap: 20px;
	padding-bottom: 20px;

	.formation-column {
		box-shadow: 0 0 1px 0.3px rgb(0, 0, 0);
		width: 30%;
		min-width: 430px;
		height: 380px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 10px 0px 20px 0px;
		background-color: rgb(255, 255, 255);

		@media (max-width: 450px) {
			min-width: 300px;
			height: 320px;
		}

		@media (max-width: 400px) {
			min-width: 280px;
			height: 310px;
		}

		@media (max-width: 310px) {
			min-width: 250px;
			height: 300px;
		}

		.formation-image {
			width: 200px;
			height: auto;

			@media (max-width: 450px) {
				width: 150px;
			}

			@media (max-width: 400px) {
				width: 140px;
			}

			@media (max-width: 310px) {
				width: 120px;
			}
		}

		h2 {
			font-size: 1.5rem;

			@media (max-width: 450px) {
				font-size: 1.15rem;
				text-align: center;
			}

			@media (max-width: 400px) {
				font-size: 1.05rem;
			}

			@media (max-width: 310px) {
				font-size: 0.9rem;
			}
		}

		p {
			font-size: 1.1rem;
			color: black;

			@media (max-width: 450px) {
				font-size: 0.9rem;
			}

			@media (max-width: 310px) {
				font-size: 0.8rem;
			}
		}

		.items {
			width: 90%;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}

		.formation-link {
			text-align: center;
			color: black;

			@media (max-width: 450px) {
				padding: 0px 15px;
			}

			a {
				text-decoration: none;
				color: black;
				font-weight: 500;
				font-size: 1rem;

				@media (max-width: 450px) {
					font-size: 0.8rem;
					text-align: center;
				}

				@media (max-width: 310px) {
					font-size: 0.7rem;
				}

				i {
					padding-left: 5px;
				}
			}
		}
	}
`;
