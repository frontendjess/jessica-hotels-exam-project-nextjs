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
	DataPickerInput,
	SpecificHotelDataLeftCol,
	SpecificHotelDataRightCol,
	RoomList,
	RoomPhoto,
} from '../../components/specifichotel/SpecificHotelElements';
import { useState } from 'react';
import Select from 'react-select';
import AlwaysAtHolidaze from '../../components/alwaysatholidaze/AlwaysAtHolidaze';
import { AlwaysAtHolidazeSection } from '../../components/alwaysatholidaze/AlwaysAtHolidazeElements';

export default function SpecificHotel({ hotelData }) {
	console.log(hotelData);
	const [selectedOption, setSelectedOption] = useState('null');
	const [startDate, setStartDate] = useState(new Date());

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
									<DataPickerInput type='date' id='checkin' name='checkin' />
								</div>
							</SpecificHotelDatePickerCol>
							<SpecificHotelDatePickerCol>
								<DataPickerLabelCol>
									<DataPickerLabel htmlFor='checkout'>
										Check Out
									</DataPickerLabel>
								</DataPickerLabelCol>
								<div>
									<DataPickerInput type='date' id='checkout' name='checkout' />
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
								<DatePickerButton primary>Make a Booking</DatePickerButton>
							</SpecificHotelDatePickerCol>
						</SpecificHotelDatePickerContainer>{' '}
					</form>{' '}
					<SpecificHotelDataContainer>
						<SpecificHotelDataLeftCol>
							<h2>{hotelData.attributes.title}</h2>
							<h6>
								{hotelData.attributes.city}, {hotelData.attributes.country}
							</h6>
							<ul>
								<RoomList>Standard Room</RoomList>
								<RoomList>Deluxe Room</RoomList>
								<RoomList>Junior Suite</RoomList>
								<RoomList>Presidential Suite</RoomList>
							</ul>
							<h5>About This Hotel</h5>
							<p>{hotelData.attributes.description}</p>
						</SpecificHotelDataLeftCol>
						<SpecificHotelDataRightCol>
							<RoomPhoto>
								<img
									src={hotelData.attributes.image}
									alt={hotelData.attributes.title}
								/>
							</RoomPhoto>
						</SpecificHotelDataRightCol>
					</SpecificHotelDataContainer>
				</SpecificHotelContainer>
				<AlwaysAtHolidaze />
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
