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
`;

const FeatureHotelTitle = styled.h2`
	padding: 0 100px;

	font-size: var(--h2-size);
	letter-spacing: var(--letter-spacing-xxl);
	line-height: var(--line-height-xxl);
	color: var(--color-black);

	${media.lessThan('large')`
        font-size: var(--h2-mobile-size);
        letter-spacing: var(--letter-spacing-xl);
        line-height: var(--line-height-xl);
    `}

	${media.lessThan('medium')`
		padding: 0 25px;
	`}

	${media.lessThan('small')`
        font-size: var(--h3-mobile-size);
        letter-spacing: var(--letter-spacing-lg);
        line-height: var(--line-height-lg);
    `}
`;

const FeatureHotelImage = styled.div`
	height: 100vh;
	background: url('https://raw.githubusercontent.com/frontendjess/hotelsProjectImages/main/img/hotel01.jpg')
		center/cover no-repeat;
	position: relative;
`;

const FeatureHotelName = styled.div`
	padding: 0 100px;
	width: 100vw;
	text-align: center;
	position: absolute;
	bottom: -150px;
	display: flex;
	flex-direction: column;
	gap: 50px;

	${media.lessThan('medium')`
		padding: 0 25px;
	`}

	h2 {
		font-size: var(--h2-size);
		letter-spacing: var(--letter-spacing-xxl);
		line-height: var(--line-height-xxl);
		color: var(--color-secondary);
		text-shadow: 2px 2px var(--color-gray);
		text-transform: uppercase;

		${media.lessThan('large')`
        font-size: var(--h3-size);
        letter-spacing: var(--letter-spacing-xl);
        line-height: var(--line-height-xl);
    `}

		${media.lessThan('medium')`
        font-size: var(--h4-size);
        letter-spacing: var(--letter-spacing-lg);
        line-height: var(--line-height-lg);
    `}
	}
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) =>
		props.primary ? 'var(--color-button-primary)' : 'white'};

	font-size: 1rem;
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
	FeatureHotelContainer,
	FeatureHotelContentContainer,
	FeatureHotelTitle,
	FeatureHotelImage,
	FeatureHotelName,
	ButtonContainer,
	Button,
};
