import styled from 'styled-components';
import media from 'styled-media-query';

const OurConceptContainer = styled.div`
	background-color: var(--color-black);

	${media.lessThan('large')`
		padding-top: 50vh;
	`}

	${media.lessThan('small')`
		padding-top: 70vh;
	`}
`;

const OurConceptAboutContainer = styled.div`
	padding: 0 100px 150px 100px;

	${media.lessThan('medium')`
		padding: 0 25px 150px 25px;
	`}
`;

const OurConceptAboutRow = styled.div`
	display: flex;
	position: relative;
	z-index: 1;
`;

const OurConceptAboutCol = styled.div``;

const OurConceptAboutTitle = styled.h2`
	position: absolute;
	z-index: 10;
	font-size: var(--h2-size);
	letter-spacing: var(--letter-spacing-xxl);
	color: var(--color-white);
	position: relative;

	${media.lessThan('large')`
			font-size: var(--h2-mobile-size);
			letter-spacing: var(--letter-spacing-xl);
	`}

	${media.lessThan('small')`
			font-size: var(--h3-mobile-size);
			letter-spacing: var(--letter-spacing-lg);
	`}
`;

const OurConceptVectorRight = styled.div`
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	top: -320px;
	right: 0;
	z-index: 5;
`;

const OurConceptAboutText = styled.p`
	color: var(--color-white);
	font-size: var(--h5-size);
	line-height: var(--line-height-md);

	.urban-traveller-text {
		position: absolute;
	}

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
	OurConceptAboutRow,
	OurConceptAboutCol,
	OurConceptAboutTitle,
	OurConceptVectorRight,
	OurConceptAboutText,
	OurConceptImageGallery,
	OurConceptFeauturesContainer,
	OurConceptFeaturesSignature,
};
