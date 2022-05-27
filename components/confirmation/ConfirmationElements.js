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

export { ConfirmationHeroContainer, ConfirmationHeroTitle };
