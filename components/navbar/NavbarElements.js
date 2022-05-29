import styled from 'styled-components';
import media from 'styled-media-query';

const NavbarCol = styled.div`
	display: flex;
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

	a {
		color: var(--color-black);
		transition: all 0.11s ease-out;
	}

	a:hover {
		background-color: var(--color-primary);
	}
`;

const MobileIcon = styled.div`
	display: none;

	${media.lessThan('large')`
        display: flex;
        font-size: 1.8rem;
    `}
`;

const SearchBarInput = styled.input`
	padding: 8px;
	width: 250px;
	font-family: var(--font-body);
	background-color: transparent;
	border: none;
	a {
		padding: 4px;
	}

	${media.lessThan('small')`
		width: 120px;
	`}
`;

const SearchBarResultTitle = styled.div`
	padding: 4px;

	a {
		color: var(--color-black);
	}

	a:hover {
		background-color: var(--color-primary);
		cursor: pointer;
	}
`;

export {
	NavbarCol,
	Navlinks,
	Navlink,
	MobileIcon,
	SearchBarInput,
	SearchBarResultTitle,
};
