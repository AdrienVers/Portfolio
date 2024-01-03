import React from "react";
import styled from "@emotion/styled";
import { DescriptionItem, SERVICE_DATA } from "./serviceData";

function Service() {

	const renderDescription = (description: DescriptionItem[]) => {
		return description.map((item, index) => {
			if (typeof item === 'string') {
				return <li key={index}>{item}</li>;
			} else {
				const parts = item.text.split(new RegExp(`(${item.bold.join('|')})`, 'g'));
				return (
					<li key={index}>
						{parts.map((part, i) => (item.bold.includes(part) ? <b key={i}>{part}</b> : part))}
					</li>
				);
			}
		});
	};

	return (
		<ServiceGlobal>
			<h1>Services proposés</h1>
			<div className="service-container">
				<div className="service-part">
					{SERVICE_DATA.map((item, i) => (
						<div key={item.id}>
							<h2>{item.name} :</h2>
							<div className="service-description">{renderDescription(item.description)}</div>
						</div>
					))}
				</div>
			</div>
		</ServiceGlobal>
	);
}

export default Service;

const ServiceGlobal = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 30px;

	h1 {
		padding: 20px 0px;
		font-size: 2rem;
		margin: 0;
		color: black;
		font-weight: 600;

		@media (max-width: 520px) {
			font-size: 1.7rem;
			text-align: center;
			padding: 10px 0px;
		}

		@media (max-width: 400px) {
			font-size: 1.8rem;
			padding: 20px 0px;
		}
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: black;

		@media (max-width: 520px) {
			font-size: 1.3rem;
			margin: 15px 0px 5px 0px;
		}
	}

	.service-container {
		width: 95%;
		display: flex;
		border-radius: 5px;
		justify-content: center;

		@media (max-width: 1100px) {
			flex-direction: column;
			width: 90%;
		}

		@media (max-width: 500px) {
			padding: 0px 10px;
		}

		.service-part {
			display: flex;
			flex-direction: column;
			background-color: rgb(255, 255, 255);
			border-radius: 5px;
			padding: 10px 20px 30px 40px;

			@media (max-width: 1100px) {
				width: 100%;
			}

			@media (max-width: 500px) {
				padding: 2px 18px 15px 18px;
			}

			.service-description {
				li {
					padding: 6px 0px;
					color: black;

					@media (max-width: 500px) {
						list-style: none;
						padding: 8px 0px;
					}
				}
			}
		}
	}
`;
