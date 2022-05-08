import Link from 'next/link';
import {
	FeatureHotelContainer,
	FeatureHotelContentContainer,
	FeatureHotelTitle,
	FeatureHotelImage,
	FeatureHotelName,
	Button,
} from './FeatureHotelElements';

function FeatureHotel() {
	return (
		<>
			<FeatureHotelContainer>
				<FeatureHotelContentContainer>
					<FeatureHotelTitle>Hotel of the Week_</FeatureHotelTitle>
					<FeatureHotelImage>
						<FeatureHotelName>Hotel Frantz, Gøteborg Sweden</FeatureHotelName>
						<Link href='/hotelfrank'>
							<Button primary>Link</Button>
						</Link>
					</FeatureHotelImage>
				</FeatureHotelContentContainer>
			</FeatureHotelContainer>
		</>
	);
}

export default FeatureHotel;
