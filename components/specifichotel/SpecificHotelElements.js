import styled from 'styled-components';
import media from 'styled-media-query';

const SpecificHotelHeroContainer = styled.div`
	width: 100vw;
	height: 70vh;
	background: url('/images/hotels/specifichotelhero.png') center/cover no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SpecificHotelHeroTitle = styled.h1`
	color: var(--color-white);
	font-size: var(--h1-size);
	letter-spacing: var(--letter-spacing-huge);
	text-align: center;
	line-height: var(--line-height-huge);
	text-shadow: 4px 4px var(--color-black);

	${media.lessThan('medium')`
        font-size: var(--mobile-h1-size);
        letter-spacing: var(--letter-spacing-xxl);
        line-height: var(--line-height-xl);
    `}
`;

const SpecificHotelContainer = styled.div`
	padding: 100px 100px 0 100px;
`;

const SpecificHotelDatePickerContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 50px;
`;

const SpecificHotelDatePickerCol = styled.div`
	flex: 1 0 200px;
`;

const DataPickerLabelCol = styled.div`
	padding: 8px;
	background-color: var(--color-black);
	color: var(--color-white);
	text-align: center;
	text-transform: uppercase;
`;

const DataPickerLabel = styled.label`
	width: 100%;
`;

const DataPickerInput = styled.input`
	width: 100%;
	padding: 8px;
	font-size: var(--font-size);
	text-align: center;
	border: solid 1px hsl(0, 0%, 80%);
`;

const SpecificHotelDataContainer = styled.div``;

const DatePickerButton = styled.button`
	width: 100%;
	background: ${(props) =>
		props.primary
			? 'var(--color-button-primary)'
			: 'var(--color-button-secondary)'};

	font-size: 1rem;
	padding: 1.15rem 1.75rem;
	border: none;
	border-radius: 0px;
	transition: all 0.11s ease-out;

	:hover {
		border: 1px solid var(--color-black);
		transform: translate(-0.25rem, -0.25rem);
		box-shadow: 0.25rem 0.25rem #000;
		cursor: pointer;
	}

	a {
		color: var(--color-black);
		text-transform: uppercase;
		text-decoration: none;
		font-family: var(--font-body);
		font-size: var(--font-size);
		letter-spacing: var(--letter-spacing-size);
	}
`;

export {
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
};
