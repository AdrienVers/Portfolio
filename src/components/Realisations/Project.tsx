import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { PROJECT_DATA } from "./projectData";

function Project() {
	return (
		<ProjectGlobal>
			<h1>Applications web réalisées</h1>
			<section>
				<ul>
					{PROJECT_DATA.map((item) => {
						return (
							<li key={item.id}>
								{
									item.url !== "" ? (
										<a href={item.url} target="_blank" rel="noopener noreferrer">
											<Image className="image" src={item.image} alt={item.name} />
										</a>
									) : (
										<Image className="image" src={item.image} alt={item.name} />
									)
								}
								<h2>{item.name}</h2>
								<span>{item.description}</span>
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
								{/* 
								<p>
									Accès au site :
									<a href={item.url} target="_blank">
										&nbsp;{item.title}&nbsp;
										<i className="fa-solid fa-arrow-up-right-from-square" />
									</a>
								</p>
								*/}
							</li>
						);
					})}
				</ul>
			</section>
		</ProjectGlobal>
	);
}

export default Project;

const ProjectGlobal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		padding: 25px 0px 15px 0px;
		font-size: 2rem;
		margin: 0;
		color: black;
		font-weight: 600;
		text-align: center;

		@media (max-width: 520px) {
			font-size: 1.7rem;
			text-align: center;
		}

		@media (max-width: 400px) {
			font-size: 1.5rem;
			padding-top: 30px;
		}
	}

	section {
		ul {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
			grid-gap: 1rem;
			list-style: none;
			padding: 0 1rem 5px 1rem;

			@media (max-width: 500px) {
				grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
			}

			li {
				background: #fff;
				padding: 1rem;
				box-shadow: 0 0 1px 0.3px rgb(0, 0, 0);

				.image {
					display: block;
					width: 100%;
					height: auto;
				}

				h2 {
					font-size: 1.5rem;
					text-align: center;
					margin: 15px 0 20px 0;
					color: black;
				}

				p {
					margin: 0;
					padding: 5px 0;
				}

				a {
					font-weight: 500;
				}

				.tags {
					width: 100%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
					flex-wrap: wrap;
					padding: 10px 0;

					.tag {
						display: flex;
						padding: 10px;
						background-color: #ffffff;
						white-space: nowrap;
						margin: 5px 8px;
						box-shadow: inset 0 0 0 1px #d1d5da;
						border-radius: 5px;
						align-items: center;
						color: black;

						@media (max-width: 520px) {
							margin: 5px 5px;
							padding: 8px;
						}

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
							color: black;

							@media (max-width: 520px) {
								font-size: 0.8rem;
							}
						}
					}
				}
			}
		}
	}
`;
