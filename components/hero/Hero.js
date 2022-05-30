import { useState } from 'react';

import Image from 'next/link';
import {
	HeroContainer,
	HeroTitleContainer,
	HeroSearchFormContainer,
	HeroDataPickerContainer,
	HeroDataPickerRow,
	HeroDataPickerCol,
	HeroDataPickerInput,
	HeroDatePickerButton,
	HeroBlackBg,
	HeroCities,
	HeroCityOslo,
	HeroCityGoteborg,
	HeroCityMiami,
	HeroCityLinks,
	HeroCityLinksInactive,
	HeroCityInactiveLinksGray,
	HeroCityComingSoonSpan,
} from './HeroElements';
import {
	DataPickerInput,
	DataPickerLabel,
	DataPickerLabelCol,
	DatePickerButton,
} from '../specifichotel/SpecificHotelElements';
import Select from 'react-select';
import { useRouter } from 'next/router';

function Hero() {
	const [isOsloShowing, setIsOsloShowing] = useState(false);
	const [isGoteborgShowing, setIsGoteborgShowing] = useState(false);
	const [isMiamiShowing, setIsMiamiShowing] = useState(false);
	const [selectedOption, setSelectedOption] = useState('null');

	const cityOptions = [
		{ value: 'oslo', label: 'Oslo, Norway' },
		{ value: 'morecomingsoon', label: 'More Locations Coming Soon' },
	];

	const guestsOptions = [
		{ value: '1adult', label: '1 Adult / 1 Room' },
		{ value: '1adult1child', label: '1 Adult + 1 Child / 1 Room' },
		{ value: '1adult2child', label: '1 Adult + 2 Children  / 1 Room' },
		{ value: '2adults', label: '2 Adults / 1 Room' },
		{ value: '2adults1child', label: '2 Adults + 1 Child / 1 Room' },
		{ value: '2adults2child', label: '2 Adults + 2 Children / 1 Room' },
		{
			value: 'extraguests',
			label: 'For more than 4 guests, make a new booking',
		},
	];

	const CitySelect = () => (
		<Select
			placeholder='Oslo, Norway'
			id='cityselect'
			defaultValue={selectedOption}
			onChange={setSelectedOption}
			options={cityOptions}
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
			placeholder='Guest / Room'
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

	const Router = useRouter();

	function handleSubmit(e) {
		e.preventDefault();
		console.log('search form clicked');
		Router.push('/hotels');
	}

	return (
		<>
			<HeroContainer id='Header'>
				<HeroTitleContainer>
					<h1>Book your Holidaze stay_</h1>
				</HeroTitleContainer>
				<HeroSearchFormContainer>
					<HeroDataPickerContainer>
						<HeroDataPickerCol>
							<DataPickerLabelCol>
								<DataPickerLabel>Check In</DataPickerLabel>
							</DataPickerLabelCol>
							<div>
								<HeroDataPickerInput
									type='date'
									id='checkout'
									name='checkout'
								/>
							</div>
						</HeroDataPickerCol>
						<HeroDataPickerCol>
							<DataPickerLabelCol>
								<DataPickerLabel>Check Out</DataPickerLabel>
							</DataPickerLabelCol>
							<div>
								<HeroDataPickerInput
									type='date'
									id='checkout'
									name='checkout'
								/>
							</div>
						</HeroDataPickerCol>
						<HeroDataPickerRow>
							<div>{GuestSelect()}</div>
						</HeroDataPickerRow>
						<HeroDataPickerRow>
							<div>{CitySelect()}</div>
						</HeroDataPickerRow>
						<HeroDataPickerRow>
							<HeroDatePickerButton primary onClick={handleSubmit}>
								View Hotels & Rates
							</HeroDatePickerButton>
						</HeroDataPickerRow>
					</HeroDataPickerContainer>
				</HeroSearchFormContainer>
				<HeroCities>
					{' '}
					<HeroCityOslo>
						<HeroCityLinks
							onMouseEnter={() => setIsOsloShowing(true)}
							onMouseLeave={() => setIsOsloShowing(false)}>
							Oslo, Norway_
						</HeroCityLinks>
						{isOsloShowing && (
							<div className='oslo-hook'>
								<img
									src='https://images.unsplash.com/photo-1433757741270-94a3bcadc2f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80'
									alt='Oslo landscape of buildings'
									width='250px'
								/>
								<h6>8 curated hotels available</h6>
							</div>
						)}
					</HeroCityOslo>
					<HeroCityGoteborg>
						<HeroCityLinksInactive
							onMouseEnter={() => setIsGoteborgShowing(true)}
							onMouseLeave={() => setIsGoteborgShowing(false)}>
							Gøteborg, Sweden_{' '}
							<HeroCityComingSoonSpan>Coming Soon</HeroCityComingSoonSpan>
						</HeroCityLinksInactive>
						{isGoteborgShowing && (
							<div className='oslo-hook'>
								<img
									src='https://images.unsplash.com/photo-1578353452043-5c1619f64f7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
									alt='Gøteborg landscape of buildings'
									width='250px'
								/>
								<h6>Gøteborg curated hotels in the works</h6>
							</div>
						)}
					</HeroCityGoteborg>
					<HeroCityMiami>
						{isMiamiShowing && (
							<div className='oslo-hook'>
								<img
									src='https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80'
									alt='Miami landscape'
									width='250px'
								/>
								<h6>Miami curated hotels in the works</h6>
							</div>
						)}
						<HeroCityInactiveLinksGray
							onMouseEnter={() => setIsMiamiShowing(true)}
							onMouseLeave={() => setIsMiamiShowing(false)}>
							Miami, USA_{' '}
							<HeroCityComingSoonSpan>Coming Soon</HeroCityComingSoonSpan>
						</HeroCityInactiveLinksGray>
					</HeroCityMiami>
				</HeroCities>
			</HeroContainer>

			<HeroBlackBg />
		</>
	);
}

export default Hero;
