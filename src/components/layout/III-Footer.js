import styled from 'styled-components';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterComp = ({ className }) => {
	const link = 'https://www.interactivetrainingsystems.com';
	return (
		<footer className={className}>
			<div className="footer-left">
				<FaTwitter />
				<FaLinkedin />
				<FaGithub />
			</div>
			<div className="footer-right"></div>
		</footer>
	);
};

// footer styling
const Footer = styled(FooterComp)`
	background: var(--footer-background);
	width: 100%;
	height: var(--footer-height);
	min-height: 48px;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	border-top: solid black;
	z-index: 100;

	// left section
	.footer-left {
		height: 100%;
		display: flex;
		margin: auto 1rem;
	}

	// right section
	.footer-right {
		display: flex;
		margin: 0 0.5rem;
	}

	@media screen and (max-width: 480px) {
		background: var(--primary);
		position: absolute;
		z-index: 1;

		.footer-left {
			padding: 10px;
			margin: 0;
		}

		.footer-right {
			margin: 0;
			text-align: center;
		}
	}
`;

export default Footer;
