import styled from 'styled-components';
import media from 'styled-media-query';

const OurConceptContainer = styled.div`
	background-color: var(--color-black);
`;

const OurConceptAboutContainer = styled.div`
	padding: 0 100px 150px 100px;
	display: flex;
	flex-direction: column;
	row-gap: 50px;

	${media.lessThan('medium')`
		padding: 0 25px 150px 25px;
	`}
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

const OurConceptAboutText = styled.p`
	color: var(--color-white);
	font-size: var(--h5-size);
	line-height: var(--line-height-md);

	${media.lessThan('large')`	
	`}

	${media.lessThan('small')`
		font-size: var(--h6-size);
		line-height: var(--line-height-smd);
	`}
`;

const OurConceptImageGallery = styled.div`
	height: 100vh;
	background: url('https://images.unsplash.com/photo-1613906800797-d5d4fb2f7bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
		center/cover no-repeat;
`;

const OurConceptFeauturesContainer = styled.div`
	padding: 150px 100px;
	display: flex;
	flex-direction: column;
	row-gap: 50px;

	${media.lessThan('medium')`
		padding: 150px 25px;
	`}
`;

const OurConceptFeaturesSignature = styled.div`
	text-align: right;
	font-family: var(--font-secondary);
	font-size: var(--h3-size);
	color: var(--color-white);

	::before {
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 300px;
		height: 5px;
		background-color: var(--color-primary);
		margin-top: 10px;
		margin-right: -200px;

		${media.lessThan('medium')`
			margin-right: -190px;
			width: 225px;
		`}

		${media.lessThan('small')`
			width: 150px;
			margin-right: -25px;
		`}
	}

	${media.lessThan('medium')`
		font-size: var(--h3-mobile-size);
	`}
`;

export {
	OurConceptContainer,
	OurConceptAboutContainer,
	OurConceptAboutTitle,
	OurConceptAboutText,
	OurConceptImageGallery,
	OurConceptFeauturesContainer,
	OurConceptFeaturesSignature,
};
