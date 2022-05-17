import axios from 'axios';
import Image from 'next/image';
import Page from '../../components/page/Page';
import { BASE_URL } from '../../configs/configs';
import { SpecificHotelContainer } from '../../components/specifichotel/SpecificHotelElements';

export default function SpecificHotel({ hotelData }) {
	console.log(hotelData);
	return (
		<>
			<Page title={hotelData.attributes.title}>
				<div className='specific-hotel-container'>
					<Image
						src={hotelData.attributes.image}
						layout='fill'
						alt={hotelData.attributes.title}
					/>
				</div>
			</Page>
		</>
	);
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	const res = await axios.get(`${BASE_URL}/api/hotels`);
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
	const res = await axios.get(`${BASE_URL}/api/hotels/${params.id}`);

	const hotelData = res.data.data;
	return { props: { hotelData } };
}
