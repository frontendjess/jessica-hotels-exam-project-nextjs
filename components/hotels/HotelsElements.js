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
	text-shadow: 4px 4px var(--color-black);

	${media.lessThan('medium')`
        font-size: var(--mobile-h1-size);
        letter-spacing: var(--letter-spacing-xxl);
        line-height: var(--line-height-xl);
    `}
`;

const HotelsContainer = styled.div`
	padding: 100px 100px 0 100px;
`;

const HotelsDataContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: space-between;
	flex-wrap: wrap;
	gap: 100px;
`;

const HotelsDataCol = styled.div`
	flex: 1 0 45%;

	img {
		width: 100%;
	}
`;

const HotelsDataTitle = styled.h6`
	padding-top: 50px;
	font-size: var(--h6-size);
`;

const HotelsDataLocation = styled.div`
	padding-top: 25px;
	padding-bottom: 25px;
`;

const HotelsButtons = styled.div`
	width: 100%;
	padding: 50px 0;
`;

const HotelsSpecificButton = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) =>
		props.primary
			? 'var(--color-button-primary)'
			: 'var(--color-button-secondary)'};

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
	HotelsHeroContainer,
	HotelsHeroTitle,
	HotelsContainer,
	HotelsDataContainer,
	HotelsDataCol,
	HotelsDataTitle,
	HotelsDataLocation,
	HotelsButtons,
	HotelsSpecificButton,
};
