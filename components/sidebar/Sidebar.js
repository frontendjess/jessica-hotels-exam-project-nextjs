import Link from 'next/link';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			{' '}
			<Icon onclick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink>
						<Link className='nav-link' href='/' isOpen={isOpen} o>
							<a>Home</a>
						</Link>
					</SidebarLink>
					<SidebarLink>
						<Link className='nav-link' href='/hotels' isOpen={isOpen}>
							<a>Hotels</a>
						</Link>
					</SidebarLink>
					<SidebarLink>
						<Link className='nav-link' href='/contact' isOpen={isOpen}>
							<a>Contact</a>
						</Link>
					</SidebarLink>
					<SidebarLink>
						<Link className='nav-link' href='/login' isOpen={isOpen}>
							<a>Admin Login</a>
						</Link>
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
