import Link from 'next/link';
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
						<HeroCityLinks>Oslo, Norway_</HeroCityLinks>
					</HeroCityOslo>
					<HeroCityGoteborg>
						<HeroCityLinks>Gøteborg, Sweden_</HeroCityLinks>
					</HeroCityGoteborg>
					<HeroCityMiami>
						<HeroCityInactiveLinks>
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
