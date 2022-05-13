import axios from 'axios';

axios
	.get('https://hotels-api-holidaze-jessica.herokuapp.com/api/hotels')
	.then((response) => {
		console.log(response);
		console.log(response.data);
	});

function index({ hotels }) {
	return (
		<>
			<h2>List of hotels</h2>
			{hotels.map((hotel) => (
				<li key={hotel.id}>Hotel {hotel.attributes.title}</li>
			))}
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
