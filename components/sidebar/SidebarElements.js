import styled from 'styled-components';
import media from 'styled-media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: var(--color-white);
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

const CloseIcon = () => {
	return (
		<div>
			<FontAwesomeIcon className='times-icon' icon={faTimes} />
		</div>
	);
};

const SidebarWrapper = styled.div`
	color: var(--color-black);
`;

const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	${media.lessThan('small')`
        grid-template-rows: repeat(6, 60px);
    `};
`;

const SidebarLink = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: var(--h5-size);
	padding: 2rem;

	${media.lessThan('small')`
		font-size: var(--h5-mobile-size);
	`}

	a {
		font-family: var(--font-body);
		font-size: var(--font-size-lg);
		letter-spacing: var(--letter-spacing-lg);
		text-transform: uppercase;
		text-decoration: none;
		list-style-type: none;
		transition: 0.2s ease-in-out;
		text-decoration: none;
		color: var(--color-black);
		cursor: pointer;
		text-align: center;

		::before {
			content: '';
			display: inline-block;
			vertical-align: middle;
			width: 50px;
			height: 5px;
			background-color: var(--color-primary);
			margin-right: 15px;
		}

		&:hover {
			color: var(--color-white);
			background-color: var(--color-black);
			transition: 0.2s ease-in-out;
		}
	}
`;

export {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
};
