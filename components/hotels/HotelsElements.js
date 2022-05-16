import styled from 'styled-components';
import media from 'styled-media-query';

const HotelsHeroContainer = styled.div`
	width: 100vw;
	height: 70vh;
	background: url('/images/hotels/hotelshero.jpg') center/cover no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HotelsHeroTitle = styled.h1`
	color: var(--color-white);
	font-size: var(--h1-size);
	letter-spacing: var(--letter-spacing-huge);
	text-align: center;
	line-height: var(--line-height-huge);

	${media.lessThan('medium')`
        font-size: var(--mobile-h1-size);
        letter-spacing: var(--letter-spacing-xxl);
        line-height: var(--line-height-xl);
    `}
`;

export { HotelsHeroContainer, HotelsHeroTitle };
