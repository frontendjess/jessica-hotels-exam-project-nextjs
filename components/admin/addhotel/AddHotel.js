import {
	AddHotelContainer,
	AddHotelTitle,
	AddHotelFormContainer,
	AddHotelFormColLeft,
	AddHotelFormColRight,
	FormInputWrapper,
	FormInputBorder,
	FormControl,
} from './AddHotelElements';
import {
	AdminButton,
	AdminReturnButton,
	AdminReturnButtonWrapper,
	AdminTitle,
} from '../global/GlobalElements';
import axios from 'axios';
import { BASE_URL } from '../../../configs/configs';
import { useState } from 'react';
import { useRouter } from 'next/router';

function AddHotelPage() {
	const [title, setTitle] = useState('');
	const [city, setCity] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const [country, setCountry] = useState('');
	const [rooms, setRooms] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		let newHotel = {
			title: title,
			city: city,
			price: price,
			description: description,
			image: image,
			country: country,
			rooms: rooms,
		};

		axios({
			method: 'post',
			url: `${BASE_URL}/api/hotels`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem('jwt')}`,
			},
			data: {
				data: {
					...newHotel,
				},
			},
		})
			.then((response) => {
				if (response.status === 200) {
					console.log('response', response);
					console.log(newHotel);
				} else {
					console.log('then error');
				}
			})
			.catch((err) => {
				// console.log('catch error', err.response.data.error);
				console.log('catch error', err);
			});
	};

	const Router = useRouter();
	function AdminReturnToLocationsHandle() {
		event.preventDefault();
		Router.push('/hotellocations');
	}

	return (
		<>
			<AddHotelContainer>
				<AdminTitle>Add a New Hotel Location</AdminTitle>

				<form onSubmit={(event) => handleSubmit(event)}>
					<AddHotelFormContainer>
						<AddHotelFormColLeft>
							<FormInputWrapper>
								<label htmlFor='hotelTitle1'>Hotel Name:</label>
								<FormInputBorder>
									<FormControl
										onChange={(event) => setTitle(event.target.value)}
										type='text'
										id='hotelTitle1'
									/>
								</FormInputBorder>
							</FormInputWrapper>
							<FormInputWrapper>
								<label htmlFor='hotelCity1'>City:</label>
								<FormInputBorder>
									<FormControl
										onChange={(event) => setCity(event.target.value)}
										type='text'
										id='hotelCity1'
									/>
								</FormInputBorder>
							</FormInputWrapper>
							<FormInputWrapper>
								<label htmlFor='hotelCountry1'>Country:</label>
								<FormInputBorder>
									<FormControl
										onChange={(event) => setCountry(event.target.value)}
										type='text'
										id='hotelCountry1'
									/>
								</FormInputBorder>
							</FormInputWrapper>
							<FormInputWrapper>
								<label htmlFor='hotelDesc1'>Description:</label>
								<FormInputBorder>
									<FormControl
										onChange={(event) => setDescription(event.target.value)}
										type='textarea'
										rows='3'
										id='hotelDesc1'
									/>
								</FormInputBorder>
							</FormInputWrapper>
							<FormInputWrapper>
								<label htmlFor='hotelPrice1'>Price:</label>
								<FormInputBorder>
									<FormControl
										onChange={(event) => setPrice(event.target.value)}
										type='text'
										id='hotelPrice1'
									/>
								</FormInputBorder>
							</FormInputWrapper>
							<FormInputWrapper>
								<label htmlFor='hotelImage1'>Image URL:</label>
								<FormInputBorder>
									<FormControl
										onChange={(event) => setImage(event.target.value)}
										type='text'
										id='hotelImage1'
									/>
								</FormInputBorder>
							</FormInputWrapper>
							<FormInputWrapper>
								<label htmlFor='hotelRooms1'>Total Hotel Rooms:</label>
								<FormInputBorder>
									<FormControl
										onChange={(event) => setRooms(event.target.value)}
										type='text'
										id='hotelRooms1'
									/>
								</FormInputBorder>
							</FormInputWrapper>
						</AddHotelFormColLeft>
						<AddHotelFormColRight>
							<AdminButton primary type='submit'>
								Add New Location
							</AdminButton>
						</AddHotelFormColRight>
					</AddHotelFormContainer>{' '}
				</form>

				<AdminReturnButtonWrapper>
					<AdminReturnButton primary onClick={AdminReturnToLocationsHandle}>
						Go Back To Dashboard
					</AdminReturnButton>
				</AdminReturnButtonWrapper>
			</AddHotelContainer>
		</>
	);
}

export default AddHotelPage;
