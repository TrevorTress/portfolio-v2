import styled from 'styled-components';

import Header from './I-Header';
import Container from './II-Container';
import Footer from './III-Footer';

import bg from './assets/bg.jpeg';

const MainComp = ({ className, children }) => {
	return (
		<main className={className}>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</main>
	);
};

const Main = styled(MainComp)`
	display: flex;
	height: 100vh; // (page - header - footer)
	width: 100vw; // (page - navbar)
	background-size: cover;
	background-image: url(${bg});

	// mobile adjustments
	@media screen and (max-width: 480px) {
		height: 82vh;
	}
`;

export default Main;
