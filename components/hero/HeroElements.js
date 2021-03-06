import styled from 'styled-components';
import media from 'styled-media-query';

const HeroContainer = styled.div`
	width: 100%;
	padding: 0 100px;
	height: calc(100vh - 81px);
	display: flex;
	flex-wrap: no-wrap;
	justify-content: space-between;
	align-items: center;
	column-gap: 100px;
	row-gap: 0;
	position: relative;

	${media.lessThan('large')`
        flex-wrap: wrap;
        row-gap: 100px;
    `}

	${media.lessThan('medium')`
		padding: 0 25px;

		height: 55vh;
	`}
`;

const HeroTitleContainer = styled.div`
	flex: 2 1 auto;

	${media.lessThan('large')`
            flex: 1 1 auto;
        `}

	h1 {
		font-size: var(--h1-size);
		letter-spacing: var(--letter-spacing-huge);

		${media.lessThan('large')`
            font-size: var(--h1-mobile-size);
            letter-spacing: var(--letter-spacing-xxl);
        `}

		${media.lessThan('medium')`
            font-size: var(--h2-mobile-size);
            letter-spacing: var(--letter-spacing-xl);
        `}

        ${media.lessThan('small')`
            font-size: var(--h3-mobile-size);
            letter-spacing: var(--letter-spacing-lg);
        `}
	}
`;

const HeroSearchFormContainer = styled.div`
	flex: 1 1 auto;
	width: 35%;
	position: relative;
	margin-top: -20vh;

	${media.lessThan('large')`
        width: 100%;
    `}

	${media.lessThan('medium')`
		margin-top: -22vh;
	`}
`;

const HeroBlackBg = styled.div`
	background-color: var(--color-black);
	height: 25vh;
	margin-top: -25vh;
`;

const HeroCities = styled.div`
	h6 {
		font-size: var(--h6-mobile-size);
	}

	${media.lessThan('large')`
        display: none;
    `}
`;

const HeroCityLinks = styled.p`
	color: var(--color-tertiary);

	::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 150px;
		height: 5px;
		background-color: var(--color-black);
		margin-right: 15px;
	}
`;

const HeroCityLinksInactive = styled.p`
	color: var(--color-black);

	::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 150px;
		height: 5px;
		background-color: var(--color-black);
		margin-right: 15px;
	}
`;

const HeroCityInactiveLinksGray = styled.p`
	color: var(--color-gray);

	::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 150px;
		height: 5px;
		background-color: var(--color-white);
		margin-right: 15px;
	}
`;

const HeroCityOslo = styled.div`
	position: absolute;
	top: 10%;
	left: 40%;

	${media.lessThan('large')`
        top: 5%;
        left: 20%;
    `}
`;

const HeroCityGoteborg = styled.div`
	position: absolute;
	top: 15%;
	left: 65%;

	${media.lessThan('large')`
        top: 50%;
        left: 65%;
    `}
`;

const HeroCityMiami = styled.div`
	position: absolute;
	bottom: 15%;
	left: 10%;

	h6 {
		color: var(--color-white);
	}
`;

const HeroCityComingSoonSpan = styled.span`
	font-style: italic;
`;

const HeroDataPickerContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	z-index: 10;
	position: absolute;
`;

const HeroDataPickerRow = styled.div`
	flex: 1 1 100%;
`;

const HeroDataPickerCol = styled.div`
	flex: 1 0 150px;
`;

const HeroDataPickerInput = styled.input`
	width: 100%;
	padding: 16px 8px;
	font-size: var(--font-size);
	text-align: center;
	border: solid 1px hsl(0, 0%, 80%);

	::-webkit-datetime-edit-day-field {
		display: block;
	}

	::-webkit-datetime-edit-month-field {
		display: block;
	}

	::-webkit-datetime-edit-year-field {
		display: block;
	}

	::-webkit-datetime-edit-text {
		color: transparent;
	}
`;

const HeroDatePickerButton = styled.button`
	width: 100%;
	background: ${(props) =>
		props.primary
			? 'var(--color-button-primary-rgb)'
			: 'var(--color-button-secondary)'};

	font-size: 1rem;
	font-family: var(--font-body);
	text-transform: uppercase;
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
	HeroCityLinks,
	HeroCityLinksInactive,
	HeroCityInactiveLinksGray,
	HeroCityGoteborg,
	HeroCityMiami,
	HeroCityComingSoonSpan,
};
