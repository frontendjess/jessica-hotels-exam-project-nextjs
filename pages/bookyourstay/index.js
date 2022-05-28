import Page from '../../components/page/Page';
import {
	BookYourStayHeroContainer,
	BookYourStayHeroTitle,
	BookYourStayContentContainer,
	BookYourStaySelectedRoomContainer,
	BookYourStaySelectedRoomRow,
	BookYourStayContentTitles,
	BookYourStaySelectedRoomColContainer,
	BookYourStaySelectedRoomColLeft,
	BookYourStaySelectedRoomColRight,
} from '../../components/bookyourstay/BookYourStayElements';
import Image from 'next/image';
import Select from 'react-select';
import { useState } from 'react';

function Bookyourstay() {
	const [selectedOption, setSelectedOption] = useState('null');

	const hotelRoomOptions = [
		{ value: 'standard', label: 'Standard Room' },
		{ value: 'deluxe', label: 'Deluxe Room' },
		{ value: 'juniorsuite', label: 'Junior Suite' },
		{ value: 'presidentialsuite', label: 'Presidential Suite' },
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

	return (
		<>
			<Page title='Book Your Stay'>
				<BookYourStayHeroContainer>
					<BookYourStayHeroTitle>Book Your Stay_</BookYourStayHeroTitle>
				</BookYourStayHeroContainer>

				<BookYourStayContentContainer>
					<BookYourStaySelectedRoomContainer>
						<BookYourStaySelectedRoomRow>
							<BookYourStayContentTitles>
								1 / 5 Your Selected Room
							</BookYourStayContentTitles>
						</BookYourStaySelectedRoomRow>

						<BookYourStaySelectedRoomColContainer>
							<BookYourStaySelectedRoomColLeft>
								<Image
									src='/images/hotels/bookyourstayselectroom.jpg'
									layout='responsive'
									alt='hotel room'
									width={550}
									height={366}
								/>
							</BookYourStaySelectedRoomColLeft>
							<BookYourStaySelectedRoomColRight>
								<p>Please select a room</p>
								<div className='inner-content-padding-sm-top'>
									{HotelRoomSelect()}
								</div>
							</BookYourStaySelectedRoomColRight>
						</BookYourStaySelectedRoomColContainer>
					</BookYourStaySelectedRoomContainer>
				</BookYourStayContentContainer>
			</Page>
		</>
	);
}

export default Bookyourstay;
