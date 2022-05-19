import axios from 'axios';
import Link from 'next/link';
import Page from '../../components/page/Page';
import HotelsHero from '../../components/hotels/HotelsHero';
import {
	HotelsContainer,
	HotelsDataContainer,
	HotelsDataCol,
	HotelsDataTitle,
	HotelsDataLocation,
	HotelsButtons,
	HotelsSpecificButton,
} from '../../components/hotels/HotelsElements';
import AlwaysAtHolidaze from '../../components/alwaysatholidaze/AlwaysAtHolidaze';
import { BASE_URL } from '../../configs/configs';

function Index({ hotels }) {
	return (
		<>
			<Page title='Our Curated Hotels'>
				<HotelsHero />
				<AlwaysAtHolidaze />
				<HotelsContainer>
					<HotelsDataContainer>
						{hotels.map((hotel) => (
							<HotelsDataCol key={hotel.id}>
								<div>
									<img
										src={hotel.attributes.image}
										alt={hotel.attributes.title}
									/>
								</div>
								<HotelsDataTitle>{hotel.attributes.title}</HotelsDataTitle>
								<HotelsDataLocation>
									{hotel.attributes.city}, {hotel.attributes.country}
								</HotelsDataLocation>
								<div>
									<p>{hotel.attributes.description}</p>
								</div>
								<HotelsButtons>
									<HotelsSpecificButton primary>
										{' '}
										<Link href={`/hotels/${hotel.id}`}>
											<a>Book This Hotel</a>
										</Link>
									</HotelsSpecificButton>
									<HotelsSpecificButton>
										{' '}
										<Link href={`/hotels/${hotel.id}`}>
											<a>View This Hotel</a>
										</Link>
									</HotelsSpecificButton>
								</HotelsButtons>
							</HotelsDataCol>
						))}
					</HotelsDataContainer>
				</HotelsContainer>
			</Page>
		</>
	);
}

export async function getServerSideProps() {
	const res = await axios.get(`${BASE_URL}/api/hotels`);
	const hotels = res.data.data;

	return {
		props: {
			hotels: res.data.data,
		},
	};
}

export default Index;
