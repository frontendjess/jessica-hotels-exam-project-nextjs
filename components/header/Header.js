import styled from 'styled-components';
import media from 'styled-media-query';

const Header = styled.div`
	width: 100%;
	padding: 0 100px;
	display: flex;
	flex-direction: row;
	wrap: no-wrap;
	justify-content: space-between;
	align-items: center;

	${media.lessThan('medium')`
		padding: 0 25px;
	`}
`;

export default Header;
