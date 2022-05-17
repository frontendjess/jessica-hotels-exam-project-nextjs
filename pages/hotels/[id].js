import axios from 'axios';

export default function SpecificHotel({ hotelData }) {
	return <div>{hotelData.id}</div>;
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const res = await axios.get('http://localhost:1337/api/hotels');
	const hotels = res.data.data;
	const paths = hotels.map((hotel) => {
		return {
			params: {
				id: hotel.id.toString(),
			},
		};
	});
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await axios.get(`http://localhost:1337/api/hotels/${params.id}`);

	const hotelData = res.data.data;
	return { props: { hotelData } };
}
