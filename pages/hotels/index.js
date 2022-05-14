import axios from 'axios';
import Page from '../../components/page/Page';

function index({ hotels }) {
	return (
		<>
			<Page title='Our curated hotels'>
				<h2>List of hotels</h2>
				{hotels.map((hotel) => (
					<li key={hotel.id}>Hotel {hotel.attributes.title}</li>
				))}
			</Page>
		</>
	);
}

export async function getServerSideProps() {
	const res = await axios.get(
		'https://hotels-api-holidaze-jessica.herokuapp.com/api/hotels'
	);
	const hotels = res.data.data;

	return {
		props: {
			hotels: res.data.data,
		},
	};
}

export default index;
