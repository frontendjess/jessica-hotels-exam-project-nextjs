import styled from 'styled-components';
import media from 'styled-media-query';

const ConfirmationHeroContainer = styled.div`
	width: 100vw;
	height: 70vh;
	background: url('/images/hotels/confirmationhero.jpg') center/cover no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ConfirmationHeroTitle = styled.h1`
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

const ConfirmationContentContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
		padding: 100px 25px;
	`}

	h5 {
		font-size: var(--h5-size);
		font-weight: var(--font-weight-reg);
		text-transform: uppercase;
		letter-spacing: var(--letter-spacing-md);
		line-height: var(--line-height-md);
	}
`;

const Signature = styled.div`
	h3 {
		font-family: var(--font-secondary);
		font-size: var(--h3-size);
		font-weight: var(--font-weight-reg);
	}
`;

const ContactLink = styled.a`
	color: var(--color-black);
	text-decoration: underline;

	:hover {
		cursor: pointer;
	}
`;

export {
	ConfirmationHeroContainer,
	ConfirmationHeroTitle,
	ConfirmationContentContainer,
	Signature,
	ContactLink,
};
