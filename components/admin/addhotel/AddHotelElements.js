import styled from 'styled-components';
import media from 'styled-media-query';

const AddHotelContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
    `}
`;

const AddHotelTitle = styled.h1`
	font-size: var(--h2-size);
	letter-spacing: var(--letter-spacing-xxl);
	line-height: var(--line-height-xxl);
	padding-bottom: 100px;

	${media.lessThan('large')`
        font-size: var(--h2-mobile-size);
        letter-spacing: var(--letter-spacing-xl);
        line-height: var(--line-height-xl);
    `}

	${media.lessThan('small')`
        font-size: var(--h4-mobile-size);
        letter-spacing: var(--letter-spacing-md);
        line-height: var(--line-height-md);
    `}
`;

const AddHotelFormContainer = styled.div`
	padding: 50px;
	background-color: var(--color-white);
	display: flex;

	flex-wrap: wrap;
`;

const AddHotelFormColLeft = styled.div`
	flex: 1 0 55%;

	${media.lessThan('medium')`
		flex: 1 0 100%;
	`}
`;

const AddHotelFormColRight = styled.div`
	flex: 1 0 30%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;

	${media.lessThan('medium')`
		flex: 1 0 100%;
		padding-top: 25px;
	`}
`;

const FormInputWrapper = styled.div`
	padding-bottom: 25px;
`;

const FormInputBorder = styled.div`
	border-bottom: solid 1px var(--color-black);
`;

const FormControl = styled.input`
	margin-top: 16px;
	display: block;
	width: 100%;
	padding: 1rem;
	border: none;
`;

const AdminButton = styled.button`
	background: ${(props) =>
		props.primary ? 'var(--color-button-admin)' : 'var(--color-primary-rgb)'};

	font-size: 1rem;
	padding: 1.15rem 1.75rem;
	border: none;
	border-radius: 0px;
	transition: all 0.11s ease-out;
	color: var(--color-white);
	font-family: var(--font-body);
	text-transform: uppercase;

	:hover {
		border: 1px solid var(--color-gray);
		transform: translate(-0.25rem, -0.25rem);
		box-shadow: 0.25rem 0.25rem #000;
		cursor: pointer;
	}

	a {
		color: var(--color-white);
		text-transform: uppercase;
		text-decoration: none;
		font-family: var(--font-body);
		font-size: var(--font-size);
		letter-spacing: var(--letter-spacing-size);
	}
`;

const AdminReturnButtonWrapper = styled.div`
	padding-top: 100px;
`;

const AdminReturnButton = styled.button`
	background: ${(props) =>
		props.primary
			? 'var(--color-button-primary)'
			: 'var(--color-primary-secondary)'};

	font-size: 1rem;
	padding: 1.15rem 1.75rem;
	border: none;
	border-radius: 0px;
	transition: all 0.11s ease-out;
	color: var(--color-black);
	font-family: var(--font-body);
	text-transform: uppercase;
	border: solid 1px var(--color-black);

	:hover {
		border: 1px solid var(--color-black);
		transform: translate(-0.25rem, -0.25rem);
		box-shadow: 0.25rem 0.25rem #000;
		cursor: pointer;
	}

	a {
		color: var(--color-white);
		text-transform: uppercase;
		text-decoration: none;
		font-family: var(--font-body);
		font-size: var(--font-size);
		letter-spacing: var(--letter-spacing-size);
	}
`;

export {
	AddHotelContainer,
	AddHotelTitle,
	AddHotelFormContainer,
	AddHotelFormColLeft,
	AddHotelFormColRight,
	FormInputWrapper,
	FormInputBorder,
	FormControl,
	AdminButton,
	AdminReturnButton,
	AdminReturnButtonWrapper,
};
