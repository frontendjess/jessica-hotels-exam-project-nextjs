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

const BookYourStayPersonalInfoContainer = styled.div`
	padding: 50px 50px 100px 50px;
	background-color: var(--color-white-bg);

	${media.lessThan('medium')`
		padding: 50px 25px 50px 25rpx;
	`}
`;

const PersonalInformationEnquiryRow = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	padding-top: 25px;

	${media.lessThan('medium')`
		flex-direction: column;
	`}
`;

const PersonalInformationEnquiryCol = styled.div`
	width: 100%;
	border-bottom: solid 1px var(--color-gray);
`;

const PersonalInformationInput = styled.input`
	width: 100%;
	padding: 1rem;
	border: none;
	background-color: transparent;
	font-family: var(--font-body);
	font-size: var(--font-size);
`;

const PersonalInformationTextArea = styled.textarea`
	width: 100%;
	padding: 1rem;
	border: none;
	background-color: transparent;
	font-family: var(--font-body);
	font-size: var(--font-size);
`;

const SummaryContainer = styled.div`
	padding: 50px;
	background-color: var(--color-white-bg);

	${media.lessThan('medium')`
		padding: 50px 25px 50px 25rpx;
	`}
`;

const SummaryRow = styled.div`
	display: flex;
	justify-content: space-between;

	${media.lessThan('medium')`
		flex-direction: column;
	`}
`;

const SummaryColLeft = styled.div`
	text-align: left;

	p {
		color: var(--color-secondary);
		font-weight: var(--font-weight-bold);
	}
`;

const SummaryColRight = styled.div`
	text-align: right;

	p {
		color: var(--color-secondary);
		font-weight: var(--font-weight-bold);
	}

	${media.lessThan('medium')`
		text-align: left;
		padding-top: 50px;
	`}
`;

const BookYourStaySubmitButton = styled.button`
	background: ${(props) =>
		props.primary ? 'var(--color-button-primary)' : 'white'};

	font-size: 1rem;
	font-family: var(--font-body);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-size);
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
	SummaryContainer,
	SummaryRow,
	SummaryColLeft,
	SummaryColRight,
	BookYourStaySubmitButton,
};
