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
	BookYourStayCustomizeColContainer,
	BookYourStayCustomizeCol,
} from '../../components/bookyourstay/BookYourStayElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
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
								<div>
									<p className='inner-content-padding-top'>
										Cancellation policy: The booking price includes
										accommodation, VAT, free wifi, and the breakfast buffet.
										Your card will charged automatically 24 hours prior to check
										in. No refunds after this time. Please contact us if you
										need to change your booking. Thank you.
									</p>
								</div>
							</BookYourStaySelectedRoomColRight>
						</BookYourStaySelectedRoomColContainer>
					</BookYourStaySelectedRoomContainer>

					<div className='section-padding-top'>
						<BookYourStaySelectedRoomContainer>
							<BookYourStaySelectedRoomRow>
								<BookYourStayContentTitles>
									2 / 5 Customize Your Room
								</BookYourStayContentTitles>
							</BookYourStaySelectedRoomRow>

							<BookYourStayCustomizeColContainer>
								<BookYourStayCustomizeCol>
									<Image
										src='/images/hotels/bookyourstay-bed01.jpg'
										layout='responsive'
										alt='hotel room bed'
										width={550}
										height={366}
									/>
									<div className='inner-content-padding-sm-top simple-flex-row'>
										<p>
											<FontAwesomeIcon
												className='features-icon'
												icon={faCircleExclamation}
											/>{' '}
											Double Bed
										</p>
									</div>
								</BookYourStayCustomizeCol>
								<BookYourStayCustomizeCol>
									{' '}
									<Image
										src='/images/hotels/bookyourstay-bed02.jpg'
										layout='responsive'
										alt='hotel room bed'
										width={550}
										height={366}
									/>
									<div className='inner-content-padding-sm-top'>
										<p>
											<FontAwesomeIcon
												className='features-icon'
												icon={faCircleExclamation}
											/>{' '}
											Single Beds
										</p>
									</div>
								</BookYourStayCustomizeCol>
								<BookYourStayCustomizeCol>
									{' '}
									<Image
										src='/images/hotels/bookyourstay-bed03.jpg'
										layout='responsive'
										alt='hotel room bed'
										width={550}
										height={366}
									/>
									<div className='inner-content-padding-sm-top'>
										<p>
											<FontAwesomeIcon
												className='features-icon'
												icon={faCircleExclamation}
											/>{' '}
											Extra Bed
										</p>
									</div>
								</BookYourStayCustomizeCol>
							</BookYourStayCustomizeColContainer>
						</BookYourStaySelectedRoomContainer>

						<div className='inner-content-padding-sm-top'>
							<p>
								Policy: We always try to cater to our guests needs. Availability
								may be limited. In case we cannot guarantee the bed of choice we
								will contact you. Our suites only hold double beds, with extra
								bed / sofabed available.
							</p>
						</div>
					</div>
				</BookYourStayContentContainer>
			</Page>
		</>
	);
}

export default Bookyourstay;
