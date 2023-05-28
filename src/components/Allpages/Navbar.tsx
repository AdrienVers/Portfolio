import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/Logo.png";

type AnimationProps = {
	isActive: boolean;
};

function Navbar() {
	const [active, setActive] = useState(false);

	return (
		<NavbarGlobal>
			<div className="desktop">
				<Link href="/">
					<Image className="logo" src={Logo} alt="logo" />
				</Link>
				<Link href="/" legacyBehavior>
					<a className="TextLink">
						<i title="Réalisations" className="fa-regular fa-window-restore" />
						<span title="Réalisations">Réalisations</span>
					</a>
				</Link>
				<Link href="/skills" legacyBehavior>
					<a className="TextLink">
						<i
							title="Compétences & Formations"
							className="fa-solid fa-book-atlas"
						/>
						<span title="Compétences & Formations">
							Compétences / Formations
						</span>
					</a>
				</Link>
				<Link href="/services" legacyBehavior>
					<a className="TextLink">
						<i title="Services" className="fa-solid fa-handshake-simple" />
						<span title="Services">Services proposés</span>
					</a>
				</Link>
				<Link href="/contact" legacyBehavior>
					<button>
						<i className="fa-solid fa-envelope" />
						<span style={{ color: "white" }}>Contact</span>
					</button>
				</Link>
			</div>
			<div className="mobile">
				<Image className="logo" src={Logo} alt="logo" />
				{active ? (
					<i
						id="menuButton"
						role="sidebarButton"
						className="fa-solid fa-xmark"
						onClick={() => setActive(!active)}
					/>
				) : (
					<i
						id="menuButton"
						className="fa-solid fa-bars"
						onClick={() => setActive(!active)}
					/>
				)}
				<SidebarContent isActive={active}>
					<div className="SidebarLinks">
						<Link href="/" legacyBehavior>
							<a onClick={() => setActive(!active)} className="TextLink">
								<span title="Réalisations">Réalisations</span>
							</a>
						</Link>
						<Link href="/skills" legacyBehavior>
							<a onClick={() => setActive(!active)} className="TextLink">
								<span title="Services">Compétences</span>
							</a>
						</Link>
						<Link href="/services" legacyBehavior>
							<a onClick={() => setActive(!active)} className="TextLink">
								<span title="Services">Services</span>
							</a>
						</Link>
						<Link href="/contact" legacyBehavior>
							<a onClick={() => setActive(!active)} className="TextLink">
								<span title="Services">Contact</span>
							</a>
						</Link>
					</div>
				</SidebarContent>
				<SidebarBackground isActive={active} />
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
	position: fixed;
	top: 0;
	z-index: 99;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);

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
			color: white;

			i,
			span {
				font-size: 1.5rem;
				color: white;

				padding: 0 5px;
			}

			i {
				display: none;

				@media (max-width: 900px) {
					display: inline;
				}
			}

			span {
				font-family: Calibri, sans-serif;
				font-weight: 500;

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

			&:hover {
				cursor: pointer;
			}
		}
	}
`;

const SidebarContent = styled.div<AnimationProps>`
	display: none;
	z-index: 2;

	@media (max-width: 450px) {
		display: flex;
		position: absolute;
		color: black;
		top: 70px;
		height: 100vh;
		width: 100%;
		left: 0;
		transition: all 0.7s;
		background-color: transparent;
		transform: ${({ isActive }) =>
			isActive ? "translateX(0)" : "translateX(-100%)"};
	}

	.SidebarLinks {
		display: flex;
		flex-direction: column;
		gap: 20px;
		background-color: white;
		padding: 20px 30px 40px 20px;
		width: 225px;
		height: 100%;
		font-size: 1.2rem;

		@media (max-width: 900px) {
			display: flex;
		}
	}
`;

const SidebarBackground = styled.div<AnimationProps>`
	position: absolute;

	@media (max-width: 450px) {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		transition: background-color 0.5s ease-in-out;
		background-color: ${({ isActive }) =>
			isActive ? "rgba(0, 0, 0, 0.5)" : "transparent"};
		transform: ${({ isActive }) =>
			isActive ? "translateX(0)" : "translateX(-100%)"};
		top: 70px;
		left: 0px;
		z-index: 1;
	}
`;
