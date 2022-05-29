import styled from 'styled-components';
import media from 'styled-media-query';

const BookYourStayHeroContainer = styled.div`
	width: 100vw;
	height: 70vh;
	background: url('/images/hotels/bookyourstayhero.jpg') bottom/cover no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BookYourStayHeroTitle = styled.h1`
	color: var(--color-white);
	font-size: var(--h1-size);
	letter-spacing: var(--letter-spacing-huge);
	text-align: center;
	line-height: var(--line-height-huge);
	text-shadow: 4px 4px var(--color-black);

	${media.lessThan('medium')`
        font-size: var(--h1-mobile-size);
        letter-spacing: var(--letter-spacing-xxl);
        line-height: var(--line-height-xl);
    `}
`;

const BookYourStayContentContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
		padding: 100px 25px 0 25px;
	`}
`;

const BookYourStaySelectedRoomContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 150px;
		height: 5px;
		background-color: var(--color-primary);
		position: absolute;
		top: 0;
		left: 0;
	}
`;

const BookYourStaySelectedRoomRow = styled.div`
	width: 100%;
`;

const BookYourStayContentTitles = styled.h5`
	font-size: var(--h5-size);
	letter-spacing: var(--letter-spacing-md);
	line-height: var(--line-height-md);
	font-weight: var(--font-weight-reg);
	text-transform: uppercase;
	padding-top: 25px;
`;

const BookYourStaySelectedRoomColContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 50px 0;

	${media.lessThan('medium')`
		flex-direction: column;
	`}
`;

const BookYourStaySelectedRoomColLeft = styled.div`
	width: 45%;

	${media.lessThan('medium')`
		width: 100%;
	`}
`;

const BookYourStaySelectedRoomColRight = styled.div`
	width: 45%;

	${media.lessThan('medium')`
		padding-top: 50px;
		width: 100%;
	`}
`;

const BookYourStayCustomizeColContainer = styled.div`
	padding-top: 50px;
	display: flex;
	gap: 50px;
	flex-wrap: wrap;

	${media.lessThan('medium')`
		flex-direction: column;
	`}
`;

const BookYourStayCustomizeCol = styled.div`
	flex: 1 0 30%;
	text-align: center;

	${media.lessThan('medium')`
		flex-direction: column;
	`}
`;

const BookYourStayCheckBoxes = styled.input`
	margin-right: 1rem;
`;

export {
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
};
