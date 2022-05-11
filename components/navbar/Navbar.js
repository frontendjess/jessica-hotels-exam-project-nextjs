import Link from 'next/link';
import Image from 'next/image';

import { NavbarCol, Navlinks, Navlink, MobileIcon } from './NavbarElements';
import FaBarsIcon from './FaBarsIcon';

const Navbar = ({ toggle }) => {
	return (
		<>
			<NavbarCol>
				<Link href='/'>
					<a>
						<Image
							src='/images/navbar-logo.svg'
							alt='logo'
							width={75}
							height={75}
						/>
					</a>
				</Link>

				<Navlinks>
					<Navlink>
						<Link href='/#Header'>
							<a>Home</a>
						</Link>
					</Navlink>
					<Navlink>
						<Link href='/hotels'>
							<a>Hotels</a>
						</Link>
					</Navlink>
					<Navlink>
						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</Navlink>
					<Navlink>
						<Link href='/login'>
							<a>Admin Login</a>
						</Link>
					</Navlink>
				</Navlinks>
			</NavbarCol>

			<NavbarCol>
				<h2>Searchbar goes here</h2>{' '}
				<MobileIcon onClick={toggle}>
					<FaBarsIcon />
				</MobileIcon>
			</NavbarCol>
		</>
	);
};

export default Navbar;
