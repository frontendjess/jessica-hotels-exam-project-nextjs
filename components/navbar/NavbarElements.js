import styled from 'styled-components';
import media from 'styled-media-query';

const NavbarCol = styled.div`
	display: flex;
	border: solid 1px red;
`;

const Navlinks = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	${media.lessThan('large')`
        display: none;
    `}
`;

const Navlink = styled.li`
	padding: 0 0 0 50px;
	text-decoration: none;
	list-style-type: none;
`;

const MobileIcon = styled.div`
	display: none;

	${media.lessThan('large')`
        display: flex;
        font-size: 1.8rem;
    `}
`;

export { NavbarCol, Navlinks, Navlink, MobileIcon };
