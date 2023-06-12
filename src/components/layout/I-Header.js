// packages
import styled from 'styled-components';

// nested components
import Helmet from './sub-components/Helmet';

// header content and logic
const HeaderComp = ({ className, login, title }) => {
	return (
		<>
			<Helmet title={title ? title : 'Development Oasis'} />
			<header className={className}>
				<div className="header-left"></div>

				<div className="header-right">
					<ul>
						<a href="/">
							<li>About</li>
						</a>
						<a href="/">
							<li>Portfolio</li>
						</a>
						<a href="/">
							<li>Tutoring</li>
						</a>
						<a href="/">
							<li>Contact</li>
						</a>
					</ul>
				</div>
			</header>
		</>
	);
};

// header styling
const Header = styled(HeaderComp)`
	background: var(--header-background);
	position: fixed;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: var(--header-height);
	padding: 0.8vh 0.4vw;
	border-bottom: solid black;
	z-index: 100;

	.header-left {
		height: 100%;
	}

	// title spacing
	.header-right {
		width: 50vw;
		& ul {
			font-weight: 700;
			font-size: 2.5rem;
			display: flex;
			justify-content: space-between;
			list-style: none;
			& a {
				color: white;
			}
			li {
				margin: 1rem;
				float: right;
			}
		}
	}

	@media screen and (max-width: 480px) {
		position: absolute;
		.header-left {
		}

		.header-right {
		}
	}
`;

export default Header;
