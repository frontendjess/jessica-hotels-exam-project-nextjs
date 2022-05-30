import styled from 'styled-components';
import media from 'styled-media-query';

const SpecificEnquiryContentContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px;
    `}
`;

const SpecificEnquiryDataContainer = styled.div`
	padding: 50px;
	background-color: var(--color-white);
	display: flex;
	flex-wrap: wrap;

	h5 {
		font-size: var(--h5-size);
		text-transform: uppercase;
		letter-spacing: var(--letter-spacing-md);
		line-height: var(--line-height-md);
		font-weight: var(--font-weight-reg);
	}

	h6 {
		font-size: var(--font-size);
		line-height: var(--line-height-smd);
		font-weight: var(--font-weight-reg);
	}

	${media.lessThan('medium')`
		padding: 50px 25px;
	`}
`;

const SpecificEnquiryDataRow = styled.div`
	flex: 1 0 50%;

	${media.lessThan('medium')`
        flex: 1 0 100%;
    `}
`;

const SpecificEnquiryEmptyRow = styled.div`
	flex: 1 0 100%;
	border-bottom: solid 1px var(--color-gray);
`;

const SpecificEnquiryDataFullRow = styled.div`
	flex: 1 0 100%;
`;

export {
	SpecificEnquiryContentContainer,
	SpecificEnquiryDataContainer,
	SpecificEnquiryDataRow,
	SpecificEnquiryEmptyRow,
	SpecificEnquiryDataFullRow,
};
