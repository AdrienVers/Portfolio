import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Frontend from "../../assets/Icons/Frontend.png";
import Backend from "../../assets/Icons/Backend.png";
import BDD from "../../assets/Icons/BDD.png";
import DevOps from "../../assets/Icons/DevOps.png";
import Projet from "../../assets/Icons/Projet.png";
import {
	FRONTEND_DATA,
	BACKEND_DATA,
	BDD_DATA,
	DEVOPS_DATA,
	PROJECT_DATA,
} from "./skillData";

function Skill() {
	return (
		<SkillGlobal>
			<div className="skill-row-fullstack">
				<div className="skill-frontend">
					<h2>FRONTEND</h2>
					<Image className="skill-image" src={Frontend} alt="Frontend" />
					<div className="skill-column">
						<div className="skill-description">
							<div className="items-list">
								{FRONTEND_DATA.map(
									(item, i) =>
										i < 3 && (
											<div className="section" key={item.id}>
												<h3>{item.name}</h3>
												{item.tags.map((tag, index) => (
													<div key={index}>
														<div className="tags-list">
															<Image
																className="logo"
																src={tag.logo}
																alt={tag.name}
																// width={25}
																// height={25}
															/>
															<div className="tags">
																<span>{tag.name}</span>
															</div>
														</div>
													</div>
												))}
											</div>
										),
								)}
							</div>
						</div>
						<div className="skill-description">
							<div className="items-list">
								{FRONTEND_DATA.map(
									(item, i) =>
										i >= 3 && (
											<div className="section" key={item.id}>
												<h3>{item.name}</h3>
												{item.tags.map((tag, index) => (
													<div key={index}>
														<div className="tags-list">
															<Image
																className="logo"
																src={tag.logo}
																alt={tag.name}
																// width={25}
																// height={25}
															/>
															<div className="tags">
																<span>{tag.name}</span>
															</div>
														</div>
													</div>
												))}
											</div>
										),
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="skill-backend">
					<h2>BACKEND</h2>
					<Image className="skill-image" src={Backend} alt="Backend" />
					<div className="items-list">
						{BACKEND_DATA.map((item, i) => (
							<div className="section" key={item.id}>
								<h3>{item.name}</h3>
								{item.tags.map((tag, index) => (
									<div key={index}>
										<div className="tags-list">
											<Image
												className="logo"
												src={tag.logo}
												alt={tag.name}
												width={25}
												height={25}
											/>
											<div className="tags">
												<span>{tag.name}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="skill-row-other">
				<div className="skill-theme">
					<h2>BDD</h2>
					<Image className="skill-image" src={BDD} alt="BDD" />
					<div className="items-list">
						{BDD_DATA.map((item, i) => (
							<div className="section" key={item.id}>
								<h3>{item.name}</h3>
								{item.tags.map((tag, index) => (
									<div key={index}>
										<div className="tags-list">
											<Image
												className="logo"
												src={tag.logo}
												alt={tag.name}
												width={25}
												height={25}
											/>
											<div className="tags">
												<span>{tag.name}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
				<div className="skill-theme">
					<h2>DEVOPS</h2>
					<Image className="skill-image" src={DevOps} alt="DevOps" />
					<div className="items-list">
						{DEVOPS_DATA.map((item, i) => (
							<div className="section" key={item.id}>
								<h3>{item.name}</h3>
								{item.tags.map((tag, index) => (
									<div key={index}>
										<div className="tags-list">
											<Image
												className="logo"
												src={tag.logo}
												alt={tag.name}
												width={25}
												height={25}
											/>
											<div className="tags">
												<span>{tag.name}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
				<div className="skill-theme">
					<h2>PROJETS</h2>
					<Image className="skill-image" src={Projet} alt="Projet" />
					<div className="items-list">
						{PROJECT_DATA.map((item, i) => (
							<div className="section" key={item.id}>
								<h3>{item.name}</h3>
								{item.tags.map((tag, index) => (
									<div key={index}>
										<div className="tags-list">
											<Image
												className="logo"
												src={tag.logo}
												alt={tag.name}
												width={25}
												height={25}
											/>
											<div className="tags">
												<span>{tag.name}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</SkillGlobal>
	);
}

export default Skill;

const SkillGlobal = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-evenly;
	row-gap: 20px;
	background-color: rgb(30, 50, 130);

	h2 {
		padding: 5px 0px 5px 0px;
		font-size: 1.7rem;
		margin: 0px;
	}

	h3 {
		padding: 10px 0px;
		font-size: 1.25rem;
		margin: 0px;

		@media (max-width: 450px) {
			padding: 5px 0px;
			font-size: 1.15rem;
		}
	}

	p {
		padding: 5px 0px;
		font-size: 1.15rem;
		margin: 0px;
	}

	.skill-row-fullstack {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		// background-color: red;
		// padding-left: 10px;
		row-gap: 20px;

		@media (max-width: 1500px) {
			width: 100%;
		}

		@media (max-width: 450px) {
			width: 300px;
		}

		.skill-frontend {
			width: 480px;
			box-shadow: inset 0 0 2px 0.3px black;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 10px 0px;
			background-color: rgb(255, 255, 255);

			@media (max-width: 350px) {
				width: 90%;
			}

			.skill-image {
				width: 140px;
				height: auto;
				padding-left: 15px;

				@media (max-width: 450px) {
					width: 80px;
					height: auto;
					padding-left: 0px;
				}
			}

			.skill-column {
				display: flex;
				flex-direction: row;
				width: 100%;

				@media (max-width: 450px) {
					flex-direction: column;
					align-items: center;
				}

				.skill-description {
					width: 50%;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;

					@media (max-width: 450px) {
						width: 250px;
					}

					@media (max-width: 350px) {
						align-items: center;
					}

					.items-list {
						width: 100%;
						justify-content: center;
						display: flex;
						flex-direction: column;
						align-items: center;

						@media (max-width: 350px) {
							width: 80%;
							text-align: center;
						}

						.section {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							width: 90%;
							box-shadow: inset 0 0 0px 0.3px black;
							border-radius: 5px;
							margin: 8px 0px;
							padding: 0px 0px 10px 0px;

							div {
								display: flex;
								width: 100%;
								justify-content: center;

								.tags-list {
									display: flex;
									align-items: center;
									width: 75%;
									padding: 2px 0px 2px 20px;

									.logo {
										width: 30px;
										height: 30px;
										object-fit: contain;
									}

									.tags {
										width: calc(100% - 30px);
									}
								}
							}
						}
					}
				}
			}
		}

		.skill-backend {
			width: 240px;
			box-shadow: inset 0 0 2px 0.3px black;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 10px 0px;
			background-color: rgb(255, 255, 255);

			@media (max-width: 450px) {
				width: 100%;
			}

			@media (max-width: 350px) {
				width: 90%;
			}

			.skill-image {
				width: 120px;
				height: auto;

				@media (max-width: 450px) {
					width: 80px;
					height: auto;
					padding-left: 0px;
				}
			}

			.items-list {
				display: flex;
				// flex-direction: row;
				flex-direction: column;
				align-items: center;
				width: 100%;
				justify-content: center;

				@media (max-width: 350px) {
					width: 90%;
					text-align: center;
				}

				.section {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 90%;
					box-shadow: inset 0 0 0px 0.3px black;
					border-radius: 5px;
					margin: 8px 0px;
					padding: 0px 0px 10px 0px;

					@media (max-width: 450px) {
						width: 75%;
					}

					div {
						display: flex;
						width: 100%;
						justify-content: center;

						.tags-list {
							display: flex;
							align-items: center;
							width: 75%;
							padding: 2px 0px 2px 20px;

							img {
								width: 30px;
								height: 30px;
								object-fit: contain;
							}

							.tags {
								width: calc(100% - 30px);
							}
						}
					}
				}
			}
		}
	}

	.skill-row-other {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		// background-color: cyan;
		// padding-right: 10px;
		row-gap: 20px;

		@media (max-width: 1500px) {
			width: 100%;
		}

		@media (max-width: 450px) {
			width: 300px;
		}

		@media (max-width: 350px) {
			width: 90%;
		}

		.skill-theme {
			width: 240px;
			box-shadow: inset 0 0 2px 0.3px black;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 10px 0px;
			background-color: rgb(255, 255, 255);

			@media (max-width: 450px) {
				width: 100%;
			}

			.skill-image {
				width: 120px;
				height: auto;

				@media (max-width: 450px) {
					width: 80px;
					height: auto;
					padding-left: 0px;
				}
			}

			.items-list {
				display: flex;
				// flex-direction: row;
				flex-direction: column;
				align-items: center;
				width: 100%;
				justify-content: center;

				@media (max-width: 350px) {
					width: 90%;
					text-align: center;
				}

				.section {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 90%;
					box-shadow: inset 0 0 0px 0.3px black;
					border-radius: 5px;
					margin: 8px 0px;
					padding: 0px 0px 10px 0px;

					@media (max-width: 450px) {
						width: 75%;
					}

					div {
						display: flex;
						width: 100%;
						justify-content: center;

						.tags-list {
							display: flex;
							align-items: center;
							width: 75%;
							padding: 2px 0px 2px 20px;

							img {
								width: 30px;
								height: 30px;
								object-fit: contain;
							}

							.tags {
								width: calc(100% - 30px);
							}
						}
					}
				}
			}
		}
	}
`;
