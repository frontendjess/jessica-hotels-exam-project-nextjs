import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../configs/configs';

import { NavbarCol, Navlinks, Navlink, MobileIcon } from './NavbarElements';
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
				<div>
					<input
						type='text'
						onChange={(event) => onChangeHandler(event.target.value)}
						value={text}
						placeholder='Search for a hotel by name'
					/>
					{suggestions &&
						suggestions.map((suggestion, i) => (
							<div key={i}>
								<Link href={`/hotels/${suggestion.id}`}>
									<a>{suggestion.attributes.title}</a>
								</Link>
							</div>
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
