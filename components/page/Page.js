import Head from 'next/head';

import Body from '../body/Body';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import { useState } from 'react';

function Page({ title, children }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Head>
				<title>{title} - Hotels for the Urban Traveler</title>
				<meta
					name='description'
					content='Holidaze - Hotels for the Urban Traveler'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Body>
				<Header>
					<Sidebar isOpen={isOpen} toggle={toggle} />
					<Navbar toggle={toggle} />
				</Header>
				<Main>{children}</Main>

				<Footer />
			</Body>
		</>
	);
}

export default Page;
