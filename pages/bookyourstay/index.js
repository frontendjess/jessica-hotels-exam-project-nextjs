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
	BookYourStayCheckBoxes,
	BookYourStayPersonalInfoContainer,
	PersonalInformationEnquiryRow,
	PersonalInformationEnquiryCol,
	PersonalInformationInput,
	PersonalInformationTextArea,
	SummaryCol,
	SummaryRow,
	SummaryColLeft,
	SummaryColRight,
	SummaryContainer,
	BookYourStaySubmitButton,
} from '../../components/bookyourstay/BookYourStayElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Select from 'react-select';
import { useState, useEffect } from 'react';

function Bookyourstay() {
	const [selectedRoomOption, setSelectedRoomOption] = useState('null');
	const [selectedBedOption, setSelectedBedOption] = useState('null');

	const hotelRoomOptions = [
		{ value: 'standard', price: '1500', label: 'Standard Room' },
		{ value: 'deluxe', price: '2000', label: 'Deluxe Room' },
		{ value: 'juniorsuite', price: '3000', label: 'Junior Suite' },
		{ value: 'presidentialsuite', price: '6000', label: 'Presidential Suite' },
	];

	const customizeBedOptions = [
		{ value: 'doublebed', label: '1 Double Bed' },
		{ value: 'singlebeds', label: '2 Single Beds' },
		{ value: 'extrabed', label: '1 Double Bed + Extra Bed (fits 2 pers)' },
	];

	const HotelRoomSelect = () => (
		<Select
			id='hotelroomselect'
			defaultValue={selectedRoomOption}
			onChange={setSelectedRoomOption}
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

	const customizeBedSelect = () => (
		<Select
			id='customizebedselect'
			defaultValue={selectedBedOption}
			onChange={setSelectedBedOption}
			options={customizeBedOptions}
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

	const [isLateOutChecked, setIsLateOutChecked] = useState(false);
	const [isChampagneChecked, setIsChampagneChecked] = useState(false);
	const [isParkingChecked, setIsParkingChecked] = useState(false);

	const handleOnChangeLateOut = () => {
		setIsLateOutChecked(!isLateOutChecked);
	};

	const handleOnChangeChampagne = () => {
		setIsChampagneChecked(!isChampagneChecked);
	};

	const handleOnChangeParking = () => {
		setIsParkingChecked(!isParkingChecked);
	};

	return (
		<>
			<Page title='Book Your Stay'>
				<BookYourStayHeroContainer>
					<BookYourStayHeroTitle>Book Your Stay_</BookYourStayHeroTitle>
				</BookYourStayHeroContainer>

				<form>
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
										layout='intrinsic'
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
											Your card will charged automatically 24 hours prior to
											check in. No refunds after this time. Please contact us if
											you need to change your booking. Thank you.
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
											layout='intrinsic'
											alt='hotel room bed'
											width={550}
											height={366}
										/>
										<div className='inner-content-padding-sm-top simple-flex-row'>
											<FontAwesomeIcon
												className='bookyourstay-icon'
												icon={faCircleExclamation}
											/>{' '}
											<p className='padding-left-xsm'>Double Bed</p>
										</div>
									</BookYourStayCustomizeCol>
									<BookYourStayCustomizeCol>
										{' '}
										<Image
											src='/images/hotels/bookyourstay-bed02.jpg'
											layout='intrinsic'
											alt='hotel room bed'
											width={550}
											height={366}
										/>
										<div className='inner-content-padding-sm-top simple-flex-row '>
											<FontAwesomeIcon
												className='bookyourstay-icon'
												icon={faCircleExclamation}
											/>{' '}
											<p className='padding-left-xsm'>Single Beds</p>
										</div>
									</BookYourStayCustomizeCol>
									<BookYourStayCustomizeCol>
										{' '}
										<Image
											src='/images/hotels/bookyourstay-bed03.jpg'
											layout='intrinsic'
											alt='hotel room bed'
											width={550}
											height={366}
										/>
										<div className='inner-content-padding-sm-top simple-flex-row '>
											<FontAwesomeIcon
												className='bookyourstay-icon'
												icon={faCircleExclamation}
											/>{' '}
											<p className='padding-left-xsm'>Extra Bed</p>
										</div>
									</BookYourStayCustomizeCol>
								</BookYourStayCustomizeColContainer>

								<p className='inner-content-padding-top'>Select a bed option</p>
								<div className='inner-content-padding-sm-top'>
									{customizeBedSelect()}
								</div>
							</BookYourStaySelectedRoomContainer>

							<div className='inner-content-padding-sm-top'>
								<p>
									Policy: We always try to cater to our guests needs.
									Availability may be limited. In case we cannot guarantee the
									bed of choice we will contact you. Our suites only hold double
									beds, with extra bed / sofabed available.
								</p>
							</div>
						</div>

						<div className='section-padding-top'>
							<BookYourStaySelectedRoomContainer>
								<BookYourStaySelectedRoomRow>
									<BookYourStayContentTitles>
										3 / 5 Extras
									</BookYourStayContentTitles>
								</BookYourStaySelectedRoomRow>

								<BookYourStayCustomizeColContainer>
									<BookYourStayCustomizeCol>
										<Image
											src='/images/hotels/bookyourstay-extras01.jpg'
											layout='intrinsic'
											alt='hotel late check out'
											width={550}
											height={366}
										/>
										<div className='inner-content-padding-sm-top simple-flex-row'>
											<FontAwesomeIcon
												className='bookyourstay-icon'
												icon={faCircleExclamation}
											/>{' '}
											<p className='padding-left-xsm'>Late Check Out</p>
										</div>
									</BookYourStayCustomizeCol>
									<BookYourStayCustomizeCol>
										{' '}
										<Image
											src='/images/hotels/bookyourstay-extras02.jpg'
											layout='intrinsic'
											alt='hotel champagne bottle service'
											width={550}
											height={366}
										/>
										<div className='inner-content-padding-sm-top simple-flex-row '>
											<FontAwesomeIcon
												className='bookyourstay-icon'
												icon={faCircleExclamation}
											/>{' '}
											<p className='padding-left-xsm'>A Bottle of Champagne</p>
										</div>
									</BookYourStayCustomizeCol>
									<BookYourStayCustomizeCol>
										{' '}
										<Image
											src='/images/hotels/bookyourstay-extras03.jpg'
											layout='intrinsic'
											alt='hotel bulding exterior'
											width={550}
											height={366}
										/>
										<div className='inner-content-padding-sm-top simple-flex-row '>
											<FontAwesomeIcon
												className='bookyourstay-icon'
												icon={faCircleExclamation}
											/>{' '}
											<p className='padding-left-xsm'>Parking</p>
										</div>
									</BookYourStayCustomizeCol>
								</BookYourStayCustomizeColContainer>

								<p className='inner-content-padding-top'>
									Select extra service
								</p>
								<div className='inner-content-padding-sm-top simple-flex-row-start'>
									<div className='bookyourstay-extra-services-container'>
										<BookYourStayCheckBoxes
											type='checkbox'
											id='latecheckout'
											name='latecheckout'
											value='Late Check Out'
											checked={isLateOutChecked}
											onChange={handleOnChangeLateOut}
										/>
										Late Check Out
									</div>
									<div className='bookyourstay-extra-services-container padding-left-sm'>
										<BookYourStayCheckBoxes
											type='checkbox'
											id='champagnebottle'
											name='champagnebottle'
											value='A Bottle of Champagne'
											checked={isChampagneChecked}
											onChange={handleOnChangeChampagne}
											price='600'
										/>
										A Bottle of Champagne
									</div>
									<div className='bookyourstay-extra-services-container padding-left-sm'>
										<BookYourStayCheckBoxes
											type='checkbox'
											id='parking'
											name='parking'
											value='Parking'
											checked={isParkingChecked}
											onChange={handleOnChangeParking}
											price='200'
										/>
										Parking
									</div>
								</div>
							</BookYourStaySelectedRoomContainer>

							<div className='inner-content-padding-sm-top'>
								<p>
									Policy: We always try to cater to our guests needs.
									Availability may be limited. In case we cannot guarantee the
									bed of choice we will contact you. Our suites only hold double
									beds, with extra bed / sofabed available.
								</p>
							</div>
						</div>

						<div className='section-padding-top'>
							<BookYourStaySelectedRoomContainer>
								<BookYourStaySelectedRoomRow>
									<BookYourStayContentTitles>
										4 / 5 Personal Information
									</BookYourStayContentTitles>
								</BookYourStaySelectedRoomRow>

								<div className='inner-content-padding-top'>
									<BookYourStayPersonalInfoContainer>
										<PersonalInformationEnquiryRow>
											<PersonalInformationEnquiryCol>
												<PersonalInformationInput
													type='text'
													placeholder='First Name'
													required
												/>
											</PersonalInformationEnquiryCol>
											<PersonalInformationEnquiryCol>
												<PersonalInformationInput
													type='text'
													placeholder='Last Name'
													required
												/>
											</PersonalInformationEnquiryCol>
										</PersonalInformationEnquiryRow>

										<PersonalInformationEnquiryRow>
											<PersonalInformationEnquiryCol>
												<PersonalInformationInput
													type='text'
													placeholder='Email Address'
													required
												/>
											</PersonalInformationEnquiryCol>
											<PersonalInformationEnquiryCol>
												<PersonalInformationInput
													type='tel'
													placeholder='Phone Number'
													required
												/>
											</PersonalInformationEnquiryCol>
										</PersonalInformationEnquiryRow>

										<PersonalInformationEnquiryRow>
											<PersonalInformationEnquiryCol>
												<PersonalInformationInput
													type='text'
													placeholder='Street Address'
													required
												/>
											</PersonalInformationEnquiryCol>
											<PersonalInformationEnquiryCol>
												<PersonalInformationInput
													type='number'
													placeholder='Zip Code'
													required
												/>
											</PersonalInformationEnquiryCol>
										</PersonalInformationEnquiryRow>

										<PersonalInformationEnquiryRow>
											<PersonalInformationEnquiryCol>
												<PersonalInformationInput
													type='text'
													placeholder='City'
													required
												/>
											</PersonalInformationEnquiryCol>
											<PersonalInformationEnquiryCol>
												<PersonalInformationInput
													type='text'
													placeholder='Country'
													required
												/>
											</PersonalInformationEnquiryCol>
										</PersonalInformationEnquiryRow>

										<PersonalInformationEnquiryRow>
											<PersonalInformationEnquiryCol>
												<PersonalInformationTextArea
													type='textarea'
													rows='1'
													placeholder='Any special requests...'
													required
												/>
											</PersonalInformationEnquiryCol>
										</PersonalInformationEnquiryRow>
									</BookYourStayPersonalInfoContainer>
								</div>
							</BookYourStaySelectedRoomContainer>
						</div>

						<div className='section-padding-top'>
							<BookYourStaySelectedRoomContainer>
								<BookYourStaySelectedRoomRow>
									<BookYourStayContentTitles>
										5 / 5 You&apos;re Almost There!
									</BookYourStayContentTitles>
								</BookYourStaySelectedRoomRow>

								<SummaryContainer>
									<SummaryRow>
										<SummaryColLeft>
											<h5>Your Summary</h5>
											<p className='inner-content-padding-sm-top'>
												1 {selectedRoomOption.label} / {selectedBedOption.label}
											</p>
										</SummaryColLeft>

										<SummaryColRight>
											<h5>Your Total</h5>
											<p className='inner-content-padding-sm-top'>
												{selectedRoomOption.price} nok
											</p>
											<p className='inner-content-padding-sm-top'>
												+ If any selected extra services have been checked
											</p>
										</SummaryColRight>
									</SummaryRow>
								</SummaryContainer>

								<div className='inner-content-padding-top simple-flex-row'>
									<BookYourStaySubmitButton primary type='submit'>
										Book Your Stay
									</BookYourStaySubmitButton>
								</div>
							</BookYourStaySelectedRoomContainer>
						</div>
					</BookYourStayContentContainer>
				</form>
			</Page>
		</>
	);
}

export default Bookyourstay;
