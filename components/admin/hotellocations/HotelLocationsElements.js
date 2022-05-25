import styled from 'styled-components';
import media from 'styled-media-query';

const AdminHotelLocationsContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
    `}
`;

export { AdminHotelLocationsContainer };
