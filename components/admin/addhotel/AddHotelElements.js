import styled from 'styled-components';
import media from 'styled-media-query';

const AddHotelContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
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

export {
	AddHotelContainer,
	AddHotelFormContainer,
	AddHotelFormColLeft,
	AddHotelFormColRight,
	FormInputWrapper,
	FormInputBorder,
	FormControl,
};
