import styled from 'styled-components';
import media from 'styled-media-query';

const FeatureHotelContainer = styled.div`
	background-color: transparent;
`;

const FeatureHotelContentContainer = styled.div`
	padding: 150px 0;
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

const FeatureHotelImage = styled.div`
	height: 100vh;
	background: url('https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
		center/cover no-repeat;
	display: flex;
	flex-direction: column;
	gap: 50px;
	justify-content: center;
	align-items: center;
`;

const FeatureHotelName = styled.div`
	padding: 0 50px;
	text-align: center;
	font-size: var(--h2-size);
	letter-spacing: var(--letter-spacing-xxl);
	line-height: var(--line-height-xxl);
	color: var(--color-white);
	text-shadow: 2px 2px var(--color-gray);
	text-transform: uppercase;
	width: 100vw;

	${media.lessThan('large')`
        width: 100vw;
        font-size: var(--h3-size);
        letter-spacing: var(--letter-spacing-xl);
        line-height: var(--line-height-xl);
    `}

	${media.lessThan('medium')`
        font-size: var(--h4-size);
        letter-spacing: var(--letter-spacing-lg);
        line-height: var(--line-height-lg);
    `}
`;

const Button = styled.a`
	/* Adapt the colors based on primary prop */
	background: ${(props) =>
		props.primary ? 'var(--color-white)' : 'var(--color-primary'};
	color: ${(props) =>
		props.primary ? 'var(--color-primary' : 'var(--color-white)'};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid red;
	border-radius: 3px;

	:hover {
		cursor: pointer;
	}
`;

export {
	FeatureHotelContainer,
	FeatureHotelContentContainer,
	FeatureHotelTitle,
	FeatureHotelImage,
	FeatureHotelName,
	Button,
};
