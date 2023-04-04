import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { PROJECT_DATA } from "./projectData";

function Project() {
	return (
		<ProjectGlobal>
			<h1>Applications web réalisées</h1>
			<div className="realisation-container">
				{PROJECT_DATA.map((item) => {
					return (
						<div key={item.id} className="realisation-list">
							<div className="image-container">
								<Image className="image" src={item.image} alt={item.name} />
							</div>
							<div className="text-container">
								<h3 className="title">{item.name}</h3>
								<p className="description">{item.description}</p>
								<div className="tags">
									{item.tags.map((tag) => {
										return (
											<div key={tag.id} className="tag">
												<Image className="logo" src={tag.logo} alt={tag.name} />
												<span>{tag.name}</span>
											</div>
										);
									})}
								</div>
								<div className="share">
									<span>
										Accéder au site :
										<a href={item.url} target="_blank">
											{item.title}
											<i className="fa-solid fa-arrow-up-right-from-square" />
										</a>
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</ProjectGlobal>
	);
}

export default Project;

const ProjectGlobal = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-around;
	flex-direction: column;

	h1 {
		padding: 25px 0px 30px 0px;
		font-size: 2rem;
		margin: 0;

		@media (max-width: 520px) {
			font-size: 1.7rem;
			text-align: center;
		}

		@media (max-width: 400px) {
			font-size: 1.5rem;
		}
	}

	h3 {
		@media (max-width: 520px) {
			font-size: 1.2rem;
			text-align: center;
		}
	}

	.realisation-container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		flex-direction: row;
		row-gap: 20px;

		.realisation-list {
			width: 450px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			box-shadow: inset 0 0 2px 0.3px black;
			border-radius: 5px;
			padding: 10px 2px;

			@media (max-width: 520px) {
				width: 350px;
			}

			@media (max-width: 400px) {
				width: 90%;
			}

			.image-container {
				width: 100%;
				height: 225px;
				display: flex;
				justify-content: center;
				align-items: center;

				@media (max-width: 520px) {
					height: 155px;
				}

				.image {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}

			.text-container {
				width: 100%;
				height: auto;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				padding-left: 10px;

				.title {
					margin: 0;
					padding-top: 10px;
				}

				.description {
					margin: 0;
					padding: 15px;
				}

				.tags {
					width: 100%;
					display: flex;
					justify-content: flex-start;
					// justify-content: center;
					align-items: center;
					flex-direction: row;
					flex-wrap: wrap;

					.tag {
						display: flex;
						padding: 10px;
						background-color: #ffffff;
						white-space: nowrap;
						margin: 5px 8px;
						box-shadow: inset 0 0 0 1px #d1d5da;
						border-radius: 5px;
						align-items: center;

						.logo {
							width: 20px;
							height: 20px;
							object-fit: contain;

							@media (max-width: 520px) {
								width: 12px;
								height: 12px;
							}
						}

						span {
							margin-left: 10px;

							@media (max-width: 520px) {
								font-size: 0.8rem;
							}
						}
					}
				}

				.share {
					width: 100%;
					display: flex;
					// justify-content: center;

					@media (max-width: 520px) {
						justify-content: center;
					}

					span {
						padding: 10px 0px 10px 10px;
						display: flex;
						align-items: center;

						@media (max-width: 520px) {
							padding: 5px 0px 5px 0px;
							font-size: 0.8rem;
							text-align: center;
						}

						a {
							text-decoration: none;
							color: rgb(49, 50, 52);
							font-weight: 500;
							padding-left: 4px;
							display: flex;
							align-items: center;

							i {
								width: 12px;
								height: 12px;
								padding: 0px 0px 0px 6px;
							}
						}
					}
				}
			}
		}
	}
`;
