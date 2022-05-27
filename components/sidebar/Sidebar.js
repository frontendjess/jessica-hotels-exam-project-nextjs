import Link from 'next/link';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from './SidebarElements';
import { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, toggle }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		setUser(localStorage.getItem('user'));
	}, []);

	function handleOnClick(e) {
		console.log('user cleared');
		window.localStorage.removeItem('user');
		window.localStorage.removeItem('jwt');
	}
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

					{user ? (
						<>
							<SidebarLink>
								<Link className='nav-link' href='/dashboard' isOpen={isOpen}>
									<a>Dashboard</a>
								</Link>
							</SidebarLink>
							<SidebarLink>
								<Link className='nav-link' href='/logout' isOpen={isOpen}>
									<a onClick={handleOnClick}>Logout</a>
								</Link>
							</SidebarLink>
						</>
					) : (
						<>
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
									<a>Login</a>
								</Link>
							</SidebarLink>
						</>
					)}
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
