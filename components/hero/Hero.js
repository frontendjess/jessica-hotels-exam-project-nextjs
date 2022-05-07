import Link from 'next/link';
import {
	HeroContainer,
	HeroTitleContainer,
	HeroSearchFormContainer,
	HeroBlackBg,
	HeroCities,
	HeroCityOslo,
	HeroCityGoteborg,
	HeroCityLinks,
} from './HeroElements';

function Hero() {
	return (
		<>
			<HeroContainer id='Header'>
				<HeroTitleContainer>
					<h1>Book your Holidaze stay here_</h1>
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
				</HeroCities>
			</HeroContainer>

			<HeroBlackBg />
		</>
	);
}

export default Hero;
