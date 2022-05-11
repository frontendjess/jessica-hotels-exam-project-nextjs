import Head from 'next/head';

import Body from '../body/Body';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';
import Footer from '../footer/Footer';

function Page({ title, children }) {
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Head>
				<title>{title} - Hotels for the Urban Traveller</title>
				<meta
					name='description'
					content='Holidaze - Hotels for the Urban Traveller'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Body>
				<Header>
					<Navbar toggle={toggle} />
				</Header>
				<Main>{children}</Main>

				<Footer />
			</Body>
		</>
	);
}

export default Page;
