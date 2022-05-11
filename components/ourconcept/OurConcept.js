import {
	OurConceptContainer,
	OurConceptAboutContainer,
	OurConceptAboutRow,
	OurConceptAboutCol,
	OurConceptAboutTitle,
	OurConceptVectorRight,
	OurConceptAboutText,
	OurConceptImageGallery,
	OurConceptFeauturesContainer,
	OurConceptFeaturesSignature,
} from './OurConceptElements';
import Image from 'next/image';

function OurConcept() {
	return (
		<>
			<OurConceptContainer>
				<OurConceptAboutContainer>
					<OurConceptAboutRow>
						<OurConceptAboutCol>
							<OurConceptAboutTitle className='inner-content-padding-btm'>
								For the Urban Traveller_
							</OurConceptAboutTitle>
						</OurConceptAboutCol>
						<OurConceptAboutCol>
							<OurConceptVectorRight>
								<img
									src='/images/vector01.png'
									alt='vector of a green and black graphic blob'
								/>
							</OurConceptVectorRight>
						</OurConceptAboutCol>
					</OurConceptAboutRow>

					<OurConceptAboutText className='urban-traveller-text'>
						Curated collection of hotels for the urban traveller. Merging the
						golden era of travel with today&apos;s innovation, sustainability,
						authenticity and comfort. Stay at one of our locations for the
						Holidaze experience. We are currently launched in the city of Oslo.
						More locations coming soon.{' '}
					</OurConceptAboutText>
				</OurConceptAboutContainer>
				<OurConceptImageGallery />
				<OurConceptFeauturesContainer>
					<OurConceptAboutRow>
						<OurConceptAboutCol>
							<OurConceptAboutTitle>Our Community_</OurConceptAboutTitle>
						</OurConceptAboutCol>
					</OurConceptAboutRow>
					<OurConceptAboutText>
						For us, a hotel is more than a place to rest your head. Holidaze is
						our idea of a community. Live, work, eat, learn, drink, play, and
						have fun together in our hotels. Whether you&apos;re in need of a
						crash pad, a weekend staycation, a romantic getaway, a layover
						between your travels, a long-term stay, we hope you will connect
						with our community. Enjoy our hotels, restaurants, bars, clubs,
						pools, kiosks, work areas, play areas, events areas and much more.
					</OurConceptAboutText>

					<OurConceptFeaturesSignature>
						xoxo Holidaze
					</OurConceptFeaturesSignature>
				</OurConceptFeauturesContainer>
			</OurConceptContainer>
		</>
	);
}

export default OurConcept;
