import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../configs/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import {
	NavbarCol,
	Navlinks,
	Navlink,
	MobileIcon,
	SearchBarInput,
	SearchBarResultTitle,
} from './NavbarElements';
import FaBarsIcon from './FaBarsIcon';

const Navbar = ({ toggle }) => {
	const [hotels, setHotels] = useState([]);
	const [text, setText] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await axios.get(`${BASE_URL}/api/hotels`);
			setHotels(res.data.data);

			console.log('hotels', hotels);
		};
		loadData();
	}, []);
	const onChangeHandler = (text) => {
		let hotelMatches = [];
		if (text.length > 0) {
			hotelMatches = hotels.filter((hotel) => {
				const regex = new RegExp(`${text}`, 'gi');
				if (hotel.attributes.title.match(regex)) {
					return hotel;
				}
			});
		}
		console.log('hotel matches', hotelMatches);

		setSuggestions(hotelMatches);
		setText(text);
	};

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
						<Link href='/'>
							<a>Home</a>
						</Link>
					</Navlink>

					{user ? (
						<>
							<Navlink>
								<Link href='/dashboard'>
									<a>Dashboard</a>
								</Link>
							</Navlink>
							<Navlink>
								<Link href='/generalinbox'>
									<a>&gt; General Inbox</a>
								</Link>
							</Navlink>
							<Navlink>
								<Link href='/hotelenquiriesinbox'>
									<a>&gt; Enquiries</a>
								</Link>
							</Navlink>
							<Navlink>
								<Link href='/hotellocations'>
									<a>&gt; Locations</a>
								</Link>
							</Navlink>
							<Navlink>
								<Link href='/logout'>
									<a onClick={handleOnClick}>Log Out</a>
								</Link>
							</Navlink>
						</>
					) : (
						<>
							<Navlink>
								<Link href='/hotels'>
									<a>Hotels</a>
								</Link>
							</Navlink>
							<Navlink>
								<Link href='/contactus'>
									<a>Contact Us</a>
								</Link>
							</Navlink>
							<Navlink>
								<Link href='/login'>
									<a>Admin Login</a>
								</Link>
							</Navlink>
						</>
					)}
				</Navlinks>
			</NavbarCol>

			<NavbarCol>
				<div>
					<SearchBarInput
						type='text'
						onChange={(event) => onChangeHandler(event.target.value)}
						value={text}
						placeholder='Search for a hotel by name'
					/>{' '}
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					{suggestions &&
						suggestions.map((suggestion, i) => (
							<SearchBarResultTitle key={i}>
								<Link href={`/hotels/${suggestion.id}`}>
									<a>{suggestion.attributes.title}</a>
								</Link>
							</SearchBarResultTitle>
						))}
				</div>
				<MobileIcon onClick={toggle}>
					<FaBarsIcon />
				</MobileIcon>
			</NavbarCol>
		</>
	);
};

export default Navbar;
