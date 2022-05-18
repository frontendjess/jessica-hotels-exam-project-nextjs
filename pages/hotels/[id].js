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
	DataPickerLabelCol,
	DataPickerLabel,
	DatePickerButton,
} from '../../components/specifichotel/SpecificHotelElements';
import { useState } from 'react';
import Select from 'react-select';

export default function SpecificHotel({ hotelData }) {
	console.log(hotelData);

	const hotelRoomOptions = [
		{ value: 'standard', label: 'Standard Room' },
		{ value: 'deluxe', label: 'Deluxe Room' },
		{ value: 'juniorsuite', label: 'Junior Suite' },
		{ value: 'presidentialsuite', label: 'Presidential Suite' },
	];

	const guestsOptions = [
		{ value: '1adult', label: '1 Adult' },
		{ value: '1adult1child', label: '1 Adult + 1 Child' },
		{ value: '1adult2child', label: '1 Adult + 2 Children' },
		{ value: '2adults', label: '2 Adults' },
		{ value: '2adults1child', label: '2 Adults + 1 Child' },
		{ value: '2adults2child', label: '2 Adults + 2 Children' },
		{
			value: 'extraguests',
			label: 'For more than 4 guests, make a new booking',
		},
	];

	const [selectedOption, setSelectedOption] = useState('null');

	const HotelRoomSelect = () => (
		<Select
			id='hotelroomselect'
			defaultValue={selectedOption}
			onChange={setSelectedOption}
			options={hotelRoomOptions}
			theme={(theme) => ({
				...theme,
				borderRadius: 0,
				colors: {
					...theme.colors,
					primary25: 'var(--color-primary)',
					primary: 'var(--color-black)',
				},
			})}
		/>
	);

	const GuestSelect = () => (
		<Select
			id='guestselect'
			defaultValue={selectedOption}
			onChange={setSelectedOption}
			options={guestsOptions}
			theme={(theme) => ({
				...theme,
				borderRadius: 0,
				colors: {
					...theme.colors,
					primary25: 'var(--color-primary)',
					primary: 'var(--color-black)',
				},
			})}
		/>
	);

	return (
		<>
			<Page title={hotelData.attributes.title}>
				<SpecificHotelHeroContainer>
					<SpecificHotelHeroTitle>
						{hotelData.attributes.title}_
					</SpecificHotelHeroTitle>
				</SpecificHotelHeroContainer>
				<SpecificHotelContainer>
					<form>
						<SpecificHotelDatePickerContainer>
							<SpecificHotelDatePickerCol>
								<DataPickerLabelCol>
									<DataPickerLabel htmlFor='checkin'>Check In</DataPickerLabel>
								</DataPickerLabelCol>
								<div>
									<input type='date' id='checkin' name='checkin' />
								</div>
							</SpecificHotelDatePickerCol>
							<SpecificHotelDatePickerCol>
								<DataPickerLabelCol>
									<DataPickerLabel htmlFor='checkout'>
										Check Out
									</DataPickerLabel>
								</DataPickerLabelCol>
								<div>
									<input type='date' id='checkout' name='checkout' />
								</div>
							</SpecificHotelDatePickerCol>
							<SpecificHotelDatePickerCol>
								<DataPickerLabelCol>
									<DataPickerLabel htmlFor='guestselect'>
										Guests
									</DataPickerLabel>
								</DataPickerLabelCol>
								<div>{GuestSelect()}</div>
							</SpecificHotelDatePickerCol>
							<SpecificHotelDatePickerCol>
								<DataPickerLabelCol>
									<DataPickerLabel htmlFor='hotelroomselect'>
										Room
									</DataPickerLabel>
								</DataPickerLabelCol>
								<div>{HotelRoomSelect()}</div>
							</SpecificHotelDatePickerCol>
							<SpecificHotelDatePickerCol>
								<DatePickerButton primary>Check Availability</DatePickerButton>
							</SpecificHotelDatePickerCol>
						</SpecificHotelDatePickerContainer>{' '}
					</form>
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
