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
	border: solid 1px hotpink;
	flex: 1 0 200px;
`;

const SpecificHotelDataContainer = styled.div``;

export {
	SpecificHotelHeroContainer,
	SpecificHotelHeroTitle,
	SpecificHotelContainer,
	SpecificHotelDatePickerContainer,
	SpecificHotelDatePickerCol,
	SpecificHotelDataContainer,
};
