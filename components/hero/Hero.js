import { useState } from 'react';

import Image from 'next/link';
import {
	HeroContainer,
	HeroTitleContainer,
	HeroSearchFormContainer,
	HeroBlackBg,
	HeroCities,
	HeroCityOslo,
	HeroCityGoteborg,
	HeroCityMiami,
	HeroCityLinks,
	HeroCityInactiveLinks,
	HeroCityComingSoonSpan,
} from './HeroElements';

function Hero() {
	const [isOsloShowing, setIsOsloShowing] = useState(false);
	const [isGoteborgShowing, setIsGoteborgShowing] = useState(false);
	const [isMiamiShowing, setIsMiamiShowing] = useState(false);
	return (
		<>
			<HeroContainer id='Header'>
				<HeroTitleContainer>
					<h1>Book your Holidaze stay_</h1>
				</HeroTitleContainer>
				<HeroSearchFormContainer>
					<h2>Search form goes here</h2>
				</HeroSearchFormContainer>
				<HeroCities>
					{' '}
					<HeroCityOslo>
						<HeroCityLinks
							onMouseEnter={() => setIsOsloShowing(true)}
							onMouseLeave={() => setIsOsloShowing(false)}>
							Oslo, Norway_
						</HeroCityLinks>
						{isOsloShowing && (
							<div className='oslo-hook'>
								<img
									src='https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80'
									alt='Oslo landscape of buildings'
									width='250px'
								/>
								<h6>9 curated hotels available</h6>
							</div>
						)}
					</HeroCityOslo>
					<HeroCityGoteborg>
						<HeroCityLinks
							onMouseEnter={() => setIsGoteborgShowing(true)}
							onMouseLeave={() => setIsGoteborgShowing(false)}>
							Gøteborg, Sweden_
						</HeroCityLinks>
						{isGoteborgShowing && (
							<div className='oslo-hook'>
								<img
									src='https://images.unsplash.com/photo-1578353452043-5c1619f64f7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
									alt='Gøteborg landscape of buildings'
									width='250px'
								/>
								<h6>6 curated hotels available</h6>
							</div>
						)}
					</HeroCityGoteborg>
					<HeroCityMiami>
						{isMiamiShowing && (
							<div className='oslo-hook'>
								<img
									src='https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80'
									alt='Miami landscape'
									width='250px'
								/>
								<h6>Miami curated hotels in the works</h6>
							</div>
						)}
						<HeroCityInactiveLinks
							onMouseEnter={() => setIsMiamiShowing(true)}
							onMouseLeave={() => setIsMiamiShowing(false)}>
							Miami, USA_{' '}
							<HeroCityComingSoonSpan>Coming Soon</HeroCityComingSoonSpan>
						</HeroCityInactiveLinks>
					</HeroCityMiami>
				</HeroCities>
			</HeroContainer>

			<HeroBlackBg />
		</>
	);
}

export default Hero;
