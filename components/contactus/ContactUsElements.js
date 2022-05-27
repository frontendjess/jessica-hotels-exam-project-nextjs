import styled from 'styled-components';
import media from 'styled-media-query';

const ContactUsContainer = styled.div`
	padding: 100px 100px 0 100px;
	display: flex;
	justify-content: space-between;

	${media.lessThan('large')`
        flex-direction: column;
        justify-content: center;
    `}

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
    `}
`;

const ContactUsColLeft = styled.div`
	width: 45%;
	display: flex;
	align-items: center;
	min-height: 70vh;

	${media.lessThan('large')`
        width: 100%;
        min-height: 25vh;
        padding-bottom: 50px;
    `}
`;

const ContactUsColRight = styled.div`
	width: 45%;

	${media.lessThan('large')`
        width: 100%;
    `}
`;

const ContactUsTitle = styled.div`
	font-size: var(--h2-size);
	font-family: var(--font-body);
	letter-spacing: var(--letter-spacing-xxl);
	line-height: var(--line-height-xxl);

	${media.lessThan('medium')`
        font-size: var(--h2-mobile-size);
        letter-spacing: var(--letter-spacing-xl);
        line-height: var(--line-height-xl);
    `}
`;

const ContactEnquiryContainer = styled.div`
	padding: 100px 50px 100px 50px;
	background-color: var(--color-white-bg);
	position: relative;
	min-height: 70vh;

	::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 150px;
		height: 5px;
		background-color: var(--color-primary);
		position: absolute;
		top: 50px;
		left: 0;
	}
`;

const ContactEnquiryTitle = styled.h4`
	font-size: var(--h4-size);
	letter-spacing: var(--letter-spacing-lg);
	line-height: var(--line-height-lg);
	font-weight: var(--font-weight-reg);

	${media.lessThan('medium')`
        font-size: var(--h4-mobile-size);
        letter-spacing: var(--letter-spacing-md);
        line-height: var(--line-height-md);
    `}
`;

const ContactEnquiryRow = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	padding-top: 25px;

	${media.lessThan('medium')`
    flex-direction: column;
    `}
`;

const ContactEnquiryCol = styled.div`
	width: 100%;
	border-bottom: solid 1px var(--color-gray);
`;

const ContactEnquiryInput = styled.input`
	width: 100%;
	padding: 1rem;
	border: none;
	background-color: transparent;
	font-family: var(--font-body);
	font-size: var(--font-size);
`;

const ContactEnquiryTextArea = styled.textarea`
	width: 100%;
	padding: 1rem;
	border: none;
	background-color: transparent;
	font-family: var(--font-body);
	font-size: var(--font-size);
`;

const ContactEnquiryButton = styled.button`
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
	ContactUsContainer,
	ContactUsColLeft,
	ContactUsColRight,
	ContactUsTitle,
	ContactEnquiryContainer,
	ContactEnquiryTitle,
	ContactEnquiryRow,
	ContactEnquiryCol,
	ContactEnquiryInput,
	ContactEnquiryTextArea,
	ContactEnquiryButton,
};
