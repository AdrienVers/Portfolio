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
			<div className="grid">
				<section className="main">
					<h2>FRONTEND</h2>
					<div className="skill-image-container">
						<Image className="skill-image" src={Frontend} alt="Frontend" />
					</div>
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
															<Image id="logo" src={tag.logo} alt={tag.name} />
															<div className="tags">
																{
																	tag.isBold === true ? (
																		<span><b>{tag.name}</b></span>
																	) : (
																		<span>{tag.name}</span>
																	)
																}
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
															<Image id="logo" src={tag.logo} alt={tag.name} />
															<div className="tags">
																{
																	tag.isBold === true ? (
																		<span><b>{tag.name}</b></span>
																	) : (
																		<span>{tag.name}</span>
																	)
																}
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
				</section>
				<section className="side">
					<h2>BACKEND</h2>
					<div className="skill-image-container">
						<Image className="skill-image" src={Backend} alt="Backend" />
					</div>
					<div className="items-list-backend">
						{BACKEND_DATA.map((item, i) => (
							<div className="section" key={item.id}>
								<h3>{item.name}</h3>
								{item.tags.map((tag, index) => (
									<div key={index}>
										<div className="tags-list">
											<Image id="logo" src={tag.logo} alt={tag.name} />
											<div className="tags">
												{
													tag.isBold === true ? (
														<span><b>{tag.name}</b></span>
													) : (
														<span>{tag.name}</span>
													)
												}
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</section>
				<section className="side">
					<h2>BDD</h2>
					<div className="skill-image-container">
						<Image className="skill-image" src={BDD} alt="BDD" />
					</div>
					<div className="items-list-other">
						{BDD_DATA.map((item, i) => (
							<div className="section" key={item.id}>
								<h3>{item.name}</h3>
								{item.tags.map((tag, index) => (
									<div key={index} id="tags-list-bdd">
										<div className="tags-list">
											<Image id="logo" src={tag.logo} alt={tag.name} />
											<div className="tags">
												{
													tag.isBold === true ? (
														<span><b>{tag.name}</b></span>
													) : (
														<span>{tag.name}</span>
													)
												}
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</section>
				<section className="side">
					<h2>DEVOPS</h2>
					<div className="skill-image-container">
						<Image className="skill-image" src={DevOps} alt="Devops" />
					</div>
					<div className="items-list-other">
						{DEVOPS_DATA.map((item, i) => (
							<div className="section" key={item.id}>
								<h3>{item.name}</h3>
								{item.tags.map((tag, index) => (
									<div key={index}>
										<div className="tags-list">
											<Image id="logo" src={tag.logo} alt={tag.name} />
											<div className="tags">
												{
													tag.isBold === true ? (
														<span><b>{tag.name}</b></span>
													) : (
														<span>{tag.name}</span>
													)
												}
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</section>
				<section className="side" id="side-project">
					<h2>PROJET</h2>
					<div className="skill-image-container">
						<Image className="skill-image" src={Projet} alt="Projet" />
					</div>
					<div className="items-list-other">
						{PROJECT_DATA.map((item, i) => (
							<div className="section" key={item.id}>
								<h3>{item.name}</h3>
								{item.tags.map((tag, index) => (
									<div key={index}>
										<div className="tags-list">
											<Image id="logo" src={tag.logo} alt={tag.name} />
											<div className="tags">
												{
													tag.isBold === true ? (
														<span><b>{tag.name}</b></span>
													) : (
														<span>{tag.name}</span>
													)
												}
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</section>
			</div>
		</SkillGlobal>
	);
}

export default Skill;

const SkillGlobal = styled.div`
	h2 {
		font-size: 1.5rem;
		text-align: center;
		margin: 10px 0 5px 0;
		color: black;
	}

	h3 {
		padding: 10px 0px;
		font-size: 1.15rem;
		margin: 0px;
		color: black;
	}

	.grid {
		display: grid;
		gap: 10px;
		grid-template-columns: minmax(400px, 2fr) repeat(4, minmax(200px, 1fr));

		@media (max-width: 1500px) {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.skill-image-container {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 5px 0px;

			.skill-image {
				width: 100px;
				height: auto;

				@media (max-width: 500px) {
					width: 80px;
					height: auto;
					padding-left: 0px;
				}
			}
		}
	}

	.main {
		background-color: rgb(255, 255, 255);
		min-width: 430px;
		box-shadow: 0 0 1px 0.3px rgb(0, 0, 0);

		@media (max-width: 500px) {
			min-width: 230px;
		}
	}
	.side {
		background-color: rgb(255, 255, 255);
		min-width: 230px;
		box-shadow: 0 0 1px 0.3px rgb(0, 0, 0);

		@media (max-width: 500px) {
			min-width: 280px;
		}
	}

	#side-project {
		@media (max-width: 1500px) {
			display: none;
		}

		@media (max-width: 1167px) {
			display: block;
		}
	}

	.main,
	.side {
		padding: 1rem;
	}

	.skill-column {
		display: flex;
		flex-direction: row;
		width: 100%;

		@media (max-width: 500px) {
			flex-direction: column;
			align-items: center;
		}

		.skill-description {
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			@media (max-width: 500px) {
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
					box-shadow: inset 0 0 1px 0.3px black;
					border-radius: 2px;
					margin: 5px 0px;
					padding: 0px 0px 8px 0px;

					div {
						display: flex;
						width: 100%;
						padding: 0px 0px 2px 20px;

						@media (max-width: 500px) {
							padding: 0px 0px 2px 30px;
						}

						.tags-list {
							display: flex;
							align-items: center;

							#logo {
								width: 30px;
								height: 30px;

								@media (max-width: 500px) {
									width: 20px;
									height: 20px;
								}
							}

							.tags {
								width: calc(100% - 30px);
								color: black;
							}
						}
					}
				}
			}
		}
	}

	.items-list-backend {
		display: flex;
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
			box-shadow: inset 0 0 1px 0.3px black;
			border-radius: 2px;
			margin: 5px 0px;
			padding: 0px 0px 8px 0px;

			@media (max-width: 500px) {
				width: 75%;
			}

			div {
				display: flex;
				width: 100%;
				padding: 0px 0px 2px 18px;

				.tags-list {
					display: flex;
					align-items: center;

					#logo {
						width: 30px;
						height: 30px;

						@media (max-width: 500px) {
							width: 20px;
							height: 20px;
						}
					}

					.tags {
						width: calc(100% - 30px);
						color: black;
					}
				}
			}
		}
	}

	.items-list-other {
		display: flex;
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
			box-shadow: inset 0 0 1px 0.3px black;
			border-radius: 2px;
			margin: 5px 0px;
			padding: 0px 0px 8px 0px;

			@media (max-width: 500px) {
				width: 75%;
			}

			#tags-list-bdd {
				padding: 0px 0px 2px 10px;
			}

			div {
				display: flex;
				width: 100%;
				padding: 0px 0px 2px 20px;

				.tags-list {
					display: flex;
					align-items: center;

					#logo {
						width: 30px;
						height: 30px;

						@media (max-width: 500px) {
							width: 20px;
							height: 20px;
						}
					}

					.tags {
						width: calc(100% - 30px);
						color: black;
					}
				}
			}
		}
	}
`;
