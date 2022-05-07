import {
	OurConceptContainer,
	OurConceptAboutContainer,
	OurConceptAboutTitle,
	OurConceptAboutText,
} from './OurConceptElements';

function OurConcept() {
	return (
		<>
			<OurConceptContainer>
				<OurConceptAboutContainer>
					<OurConceptAboutTitle>
						<h2>For the Urban Traveller_</h2>
					</OurConceptAboutTitle>
					<OurConceptAboutText>
						<p>
							Curated collection of hotels for the urban traveller. Merging the
							golden era of travel with today&apos;s innovation, sustainability,
							authenticity and comfort. Stay at one of our locations for the
							Holidaze experience. We are currently launched in the cities of
							Oslo and Gøteborg. More locations coming soon.{' '}
						</p>
					</OurConceptAboutText>
				</OurConceptAboutContainer>
			</OurConceptContainer>
		</>
	);
}

export default OurConcept;
