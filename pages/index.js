import Head from 'next/head';
import Image from 'next/image';

import Body from '../components/body/Body';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Main from '../components/main/Main';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';

export default function Home() {
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Head>
				<title>Holidaze - Hotels for the Urban Traveller</title>
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
				<Main>
					<Hero />
					<h1>You can do it Jess</h1>
				</Main>

				<Footer />
			</Body>
		</>
	);
}
