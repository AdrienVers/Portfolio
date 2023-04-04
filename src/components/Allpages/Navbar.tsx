import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Logo.png";

function Navbar() {
	return (
		<NavbarGlobal>
			<div className="desktop">
				<Link href="/">
					<Image className="logo" src={Logo} alt="logo" />
				</Link>
				<Link href="/" title="Réalisations" legacyBehavior>
					<a className="TextLink">
						<i className="fa-regular fa-window-restore" />
						<span>Réalisations</span>
					</a>
				</Link>
				<Link href="/skills" title="Compétences & Formations" legacyBehavior>
					<a className="TextLink">
						<i className="fa-solid fa-book-atlas" />
						<span>Compétences / Formations</span>
					</a>
				</Link>
				<Link href="/services" title="Services" legacyBehavior>
					<a className="TextLink">
						<i className="fa-solid fa-handshake-simple" />
						<span>Services proposés</span>
					</a>
				</Link>
				<button>
					<i className="fa-solid fa-envelope" />
					<span>Contact</span>
				</button>
			</div>
			<div className="mobile">
				<Image className="logo" src={Logo} alt="logo" />
				<i className="fas fa-bars" />
			</div>
		</NavbarGlobal>
	);
}

export default Navbar;

const NavbarGlobal = styled.nav`
	width: 100%;
	height: 70px;
	background-color: rgb(50, 50, 52);
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: sticky;
	top: 0;
	z-index: 99;

	.desktop {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;

		@media (max-width: 450px) {
			display: none;
		}

		.logo {
			width: 55px;
			height: 55px;
		}

		a {
			text-decoration: none;

			i,
			span {
				font-size: 1.3rem;
				color: #fff;
				padding: 0 5px;
			}

			i {
				display: none;

				@media (max-width: 900px) {
					display: inline;
				}
			}

			span {
				@media (max-width: 900px) {
					display: none;
				}
			}
		}

		button {
			background-color: rgb(50, 50, 52);
			box-shadow: inset 0 0 0 1px #fff;
			padding: 8px 16px;
			font-size: 1.2rem;
			border: none;
			color: #fff;
			border-radius: 5px;

			&:hover {
				cursor: pointer;
			}

			i {
				font-size: 1.3rem;
				padding-right: 10px;
			}
		}
	}

	.mobile {
		display: none;
		width: 100%;
		height: 100%;
		color: white;

		@media (max-width: 450px) {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 40px 0 25px;
		}

		.logo {
			width: 55px;
			height: 55px;
		}

		i {
			font-size: 1.8rem;
		}
	}
`;
