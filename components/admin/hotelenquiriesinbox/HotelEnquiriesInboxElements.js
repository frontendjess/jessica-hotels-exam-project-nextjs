import styled from 'styled-components';
import media from 'styled-media-query';

const HotelEnquiriesInboxContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
    `}
`;

const HotelEnquiriesInboxTableContainer = styled.div`
	padding-top: 100px;
`;

const HotelEnquiriesInboxTable = styled.table`
	padding: 50px;
	background-color: var(--color-white);
	width: 100%;

	${media.lessThan('medium')`
        padding: 25px;
    `}

	${media.lessThan('small')`
        padding: 25px 0;
    `}

    th {
		padding: 1rem;

		${media.lessThan('medium')`
            padding: 25px 0;
        `}
	}

	td {
		${media.lessThan('medium')`
            display: block;
        `}
	}
`;

const HotelEnquiriesInboxTableHeadings = styled.h6`
	font-size: var(--h6-size);
	letter-spacing: var(--letter-spacing-size);
	text-transform: uppercase;
`;

const HotelEnquiriesInboxStatusOpen = styled.p`
	color: var(--color-secondary);
	font-weight: var(--font-weight-semi-bold);
`;

const HotelEnquiriesInboxStatusClosed = styled.p`
	color: var(--color-tertiary);
	font-weight: var(--font-weight-semi-bold);
`;

export {
	HotelEnquiriesInboxContainer,
	HotelEnquiriesInboxTableContainer,
	HotelEnquiriesInboxTable,
	HotelEnquiriesInboxTableHeadings,
	HotelEnquiriesInboxStatusOpen,
	HotelEnquiriesInboxStatusClosed,
};
