import Hero from '../components/hero/Hero';
import OurConcept from '../components/ourconcept/OurConcept';
import FeatureHotel from '../components/featurehotel/FeatureHotel';

import Page from '../components/page/Page';

export default function Home() {
	return (
		<>
			<Page title='Holidaze'>
				<Hero />
				<OurConcept />
				<FeatureHotel />
			</Page>
		</>
	);
}
