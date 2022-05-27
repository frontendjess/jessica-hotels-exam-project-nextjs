import styled from 'styled-components';
import media from 'styled-media-query';

const AdminHotelLocationsContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
    `}
`;

const AdminAddNewLocationLink = styled.a`
	padding-left: 1rem;
	font-family: var(--font-body);
	font-size: var(--h4-size);
	text-transform: uppercase;
	cursor: pointer;
	color: var(--color-secondary);
	transition: all 0.11s ease-out;

	:hover {
		color: var(--color-black);
	}
`;

const AdminHotelsTableContainer = styled.div`
	padding-top: 100px;
`;

const AdminHotelsTable = styled.table`
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

const AdminHotelsTableHeadings = styled.h6`
	font-size: var(--h6-size);
	letter-spacing: var(--letter-spacing-size);
	text-transform: uppercase;
`;

export {
	AdminHotelLocationsContainer,
	AdminAddNewLocationLink,
	AdminHotelsTableContainer,
	AdminHotelsTable,
	AdminHotelsTableHeadings,
};
