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
	backgound-color: var(--color-white);
	padding: 50px;
`;

export {
	AdminHotelLocationsContainer,
	AdminAddNewLocationLink,
	AdminHotelsTableContainer,
};
