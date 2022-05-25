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

const AddHotelForm = styled.div`
	width: 100%;
`;

const AddHotelFormContainer = styled.div`
	padding: 50px;
	background-color: var(--color-white);
	display: flex;

	flex-wrap: wrap;
`;

const AddHotelFormColLeft = styled.div`
	flex: 1 0 450px;
`;

const AddHotelFormColRight = styled.div`
	flex: 1 0 450px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
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
	AddHotelTitle,
	AddHotelForm,
	AddHotelFormContainer,
	AddHotelFormColLeft,
	AddHotelFormColRight,
	FormInputWrapper,
	FormInputBorder,
	FormControl,
};
