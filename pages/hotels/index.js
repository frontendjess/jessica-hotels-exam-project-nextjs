import axios from 'axios';
import Page from '../../components/page/Page';
import AlwaysAtHolidaze from '../../components/alwaysatholidaze/AlwaysAtHolidaze';

function index({ hotels }) {
	return (
		<>
			<Page title='Our Curated Hotels'>
				<AlwaysAtHolidaze />
				<h2>List of hotels</h2>
				{hotels.map((hotel) => (
					<li key={hotel.id}>
						{hotel.attributes.title} {hotel.attributes.city}
					</li>
				))}
			</Page>
		</>
	);
}

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:1337/api/hotels');
	const hotels = res.data.data;

	return {
		props: {
			hotels: res.data.data,
		},
	};
}

export default index;
