import styled from 'styled-components';
import media from 'styled-media-query';

const OurConceptContainer = styled.div`
	background-color: var(--color-black);
	height: 80vh;
`;

const OurConceptAboutContainer = styled.div`
	padding: 0 50px;
	border: solid 1px yellow;
	display: flex;
	flex-direction: column;
	row-gap: 50px;
`;

const OurConceptAboutTitle = styled.div`
	h2 {
		font-size: var(--h2-size);
		letter-spacing: var(--letter-spacing-xxl);
		color: var(--color-white);
	}

	${media.lessThan('large')`
        h2 {
            font-size: var(--h2-mobile-size);
            letter-spacing: var(--letter-spacing-xl);
        }
    `}

	${media.lessThan('small')`
        h2 {
            font-size: var(--h3-mobile-size);
            letter-spacing: var(--letter-spacing-lg);
        }
    `}
`;

const OurConceptAboutText = styled.div`
	p {
		letter-spacing: var(--letter-spacing-size);
		color: var(--color-white);

		${media.greaterThan('large')`
            font-size: var(--h5-size);
            line-height: var(--line-height-md);
            letter-spacing: var(--letter-spacing-md);
        `}

		${media.lessThan('small')`
            p {
                font-size: var(--h6-mobile-size);
                letter-spacing: var(--letter-spacing-size);
            }
        `}
	}
`;

export {
	OurConceptContainer,
	OurConceptAboutContainer,
	OurConceptAboutTitle,
	OurConceptAboutText,
};
