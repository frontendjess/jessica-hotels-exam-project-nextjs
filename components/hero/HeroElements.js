import styled from 'styled-components';
import media from 'styled-media-query';

const HeroContainer = styled.div`
	width: 100%;
	padding: 0 50px;
	height: calc(100vh - 81px);
	display: flex;
	flex-wrap: no-wrap;
	justify-content: space-between;
	align-items: center;
	column-gap: 100px;
	row-gap: 0;
	position: relative;

	${media.lessThan('large')`
        flex-wrap: wrap;
        row-gap: 100px;
    `}
`;

const HeroTitleContainer = styled.div`
	flex: 2 1 auto;

	${media.lessThan('large')`
            flex: 1 1 auto;
        `}

	h1 {
		font-size: var(--h1-size);
		letter-spacing: var(--letter-spacing-huge);

		${media.lessThan('large')`
            font-size: var(--h1-mobile-size);
            letter-spacing: var(--letter-spacing-xxl);
        `}

		${media.lessThan('medium')`
            font-size: var(--h2-mobile-size);
            letter-spacing: var(--letter-spacing-xl);
        `}

        ${media.lessThan('small')`
            font-size: var(--h3-mobile-size);
            letter-spacing: var(--letter-spacing-lg);
        `}
	}
`;

const HeroSearchFormContainer = styled.div`
	flex: 1 1 auto;
	width: 35%;

	${media.lessThan('large')`
        width: 100%;
    `}
`;

const HeroBlackBg = styled.div`
	background-color: var(--color-black);
	height: 25vh;
	margin-top: -25vh;
`;

const HeroCities = styled.div`
	${media.lessThan('medium')`
        display: none;
    `}
`;

const HeroCityLinks = styled.p`
	color: var(--color-tertiary);

	::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 150px;
		height: 5px;
		background-color: var(--color-black);
		margin-right: 15px;
	}
`;

const HeroCityInactiveLinks = styled.p`
	color: var(--color-gray);

	::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 150px;
		height: 5px;
		background-color: var(--color-white);
		margin-right: 15px;
	}
`;

const HeroCityOslo = styled.div`
	position: absolute;
	top: 10%;
	left: 40%;

	${media.lessThan('large')`
        top: 5%;
        left: 20%;
    `}
`;

const HeroCityGoteborg = styled.div`
	position: absolute;
	top: 15%;
	left: 65%;

	${media.lessThan('large')`
        top: 50%;
        left: 65%;
    `}
`;

const HeroCityMiami = styled.div`
	position: absolute;
	bottom: 15%;
	left: 10%;
`;

const HeroCityComingSoonSpan = styled.span`
	font-style: italic;
`;

export {
	HeroContainer,
	HeroTitleContainer,
	HeroSearchFormContainer,
	HeroBlackBg,
	HeroCities,
	HeroCityOslo,
	HeroCityLinks,
	HeroCityInactiveLinks,
	HeroCityGoteborg,
	HeroCityMiami,
	HeroCityComingSoonSpan,
};
