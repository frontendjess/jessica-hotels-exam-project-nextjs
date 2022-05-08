import styled from 'styled-components';
import media from 'styled-media-query';

const FeatureHotelContainer = styled.div`
	background-color: transparent;
`;

const FeatureHotelContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 50px;
	border: solid 1px yellow;
`;

const FeatureHotelTitle = styled.h2`
	padding: 0 50px;

	font-size: var(--h2-size);
	letter-spacing: var(--letter-spacing-xxl);
	line-height: var(--line-height-xxl);
	color: var(--color-black);

	${media.lessThan('large')`
        font-size: var(--h2-mobile-size);
        letter-spacing: var(--letter-spacing-xl);
        line-height: var(--line-height-xl);
    `}

	${media.lessThan('small')`
        font-size: var(--h3-mobile-size);
        letter-spacing: var(--letter-spacing-lg);
        line-height: var(--line-height-lg);
    `}
`;

export {
	FeatureHotelContainer,
	FeatureHotelContentContainer,
	FeatureHotelTitle,
};
