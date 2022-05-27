import styled from 'styled-components';
import media from 'styled-media-query';

const GeneralInboxContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
    `}
`;

const GeneralInboxTableContainer = styled.div`
	padding-top: 100px;
`;

const GeneralInboxTable = styled.table`
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

		${media.lessThan('small')`
        padding: 25px 0;
    `}
	}

	td {
	}
`;

const GeneralInboxTableHeadings = styled.h6`
	font-size: var(--h6-size);
	letter-spacing: var(--letter-spacing-size);
	text-transform: uppercase;
`;

export {
	GeneralInboxContainer,
	GeneralInboxTableContainer,
	GeneralInboxTable,
	GeneralInboxTableHeadings,
};
