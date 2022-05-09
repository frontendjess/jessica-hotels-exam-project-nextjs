import Link from 'next/link';
import {
	FeatureHotelContainer,
	FeatureHotelContentContainer,
	FeatureHotelTitle,
	FeatureHotelImage,
	FeatureHotelName,
	ButtonContainer,
	Button,
} from './FeatureHotelElements';

function FeatureHotel() {
	return (
		<>
			<FeatureHotelContainer>
				<FeatureHotelContentContainer>
					<FeatureHotelTitle>Hotel of the Week_</FeatureHotelTitle>
					<FeatureHotelImage>
						<FeatureHotelName>
							<h2>Hotel Frantz, Gøteborg Sweden</h2>
							<ButtonContainer>
								{' '}
								<Button>
									{' '}
									<Link href='/hotelfrantz'>
										<a>View This Location</a>
									</Link>
								</Button>
							</ButtonContainer>
						</FeatureHotelName>
					</FeatureHotelImage>
				</FeatureHotelContentContainer>
			</FeatureHotelContainer>
		</>
	);
}

export default FeatureHotel;
