import axios from 'axios';
import Image from 'next/image';
import styled from 'styled-components';
import Page from '../../components/page/Page';
import { BASE_URL } from '../../configs/configs';
import {
	SpecificHotelHeroContainer,
	SpecificHotelHeroTitle,
	SpecificHotelContainer,
	SpecificHotelDatePickerContainer,
	SpecificHotelDatePickerCol,
	SpecificHotelDataContainer,
} from '../../components/specifichotel/SpecificHotelElements';

export default function SpecificHotel({ hotelData }) {
	console.log(hotelData);
	return (
		<>
			<Page title={hotelData.attributes.title}>
				<SpecificHotelHeroContainer>
					<SpecificHotelHeroTitle>
						{hotelData.attributes.title}_
					</SpecificHotelHeroTitle>
				</SpecificHotelHeroContainer>
				<SpecificHotelContainer>
					<SpecificHotelDatePickerContainer>
						<SpecificHotelDatePickerCol>
							<label htmlFor='checkin'>Check In:</label>
							<input type='date' id='checkin' name='checkin' />
						</SpecificHotelDatePickerCol>
						<SpecificHotelDatePickerCol>
							<label htmlFor='checkout'>Check Out:</label>
							<input type='date' id='checkout' name='checkout' />
						</SpecificHotelDatePickerCol>
						<SpecificHotelDatePickerCol>1</SpecificHotelDatePickerCol>
						<SpecificHotelDatePickerCol>1</SpecificHotelDatePickerCol>
						<SpecificHotelDatePickerCol>1</SpecificHotelDatePickerCol>
					</SpecificHotelDatePickerContainer>
				</SpecificHotelContainer>
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
