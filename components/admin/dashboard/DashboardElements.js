import styled from 'styled-components';
import media from 'styled-media-query';

const AdminDashboardContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
    `}
`;

const AdminDashboardFunctionalitiesContainer = styled.div`
	display: flex;
	justify-content: space-between;

	${media.lessThan('large')`
        flex-direction: column;
    `}
`;

const AdminDashboardFunctionalitiesCol = styled.div`
	${media.lessThan('large')`
        justify-content: flex-start;
        padding-bottom: 25px;
    `}
`;

export {
	AdminDashboardContainer,
	AdminDashboardFunctionalitiesContainer,
	AdminDashboardFunctionalitiesCol,
};
