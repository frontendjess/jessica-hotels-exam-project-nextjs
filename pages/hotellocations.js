import Page from '../components/page/Page';
import {
	AdminHotelLocationsContainer,
	AdminAddNewLocationLink,
	AdminHotelsTableContainer,
	AdminHotelsTable,
	AdminHotelsTableHeadings,
} from '../components/admin/hotellocations/HotelLocationsElements';
import {
	AdminReturnButton,
	AdminReturnButtonWrapper,
	AdminTitle,
	AdminFunctionalityLink,
} from '../components/admin/global/GlobalElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BASE_URL } from '../configs/configs';
import axios from 'axios';

function Hotellocations({ hotels }) {
	const Router = useRouter();

	function AdminReturnToDashboardHandle() {
		event.preventDefault();
		Router.push('/dashboard');
	}
	return (
		<>
			<Page title='Admin - Hotel Locations'>
				<AdminHotelLocationsContainer>
					<AdminTitle>All Hotel Locations</AdminTitle>
					<div>
						<FontAwesomeIcon className='features-icon' icon={faSquarePlus} />
						<Link href='/addhotel'>
							<AdminAddNewLocationLink>
								Add a New Hotel Location
							</AdminAddNewLocationLink>
						</Link>
					</div>

					<AdminHotelsTableContainer>
						<AdminHotelsTable>
							<thead>
								<tr>
									<th scope='row'>
										<AdminHotelsTableHeadings>Id #</AdminHotelsTableHeadings>
									</th>
									<td>
										<AdminHotelsTableHeadings>
											Hotel Name
										</AdminHotelsTableHeadings>
									</td>
									<td>
										<AdminHotelsTableHeadings>
											City, Country
										</AdminHotelsTableHeadings>
									</td>
									<td>
										<AdminHotelsTableHeadings>View</AdminHotelsTableHeadings>
									</td>
								</tr>
							</thead>
							<tbody>
								{hotels.map((hotel) => (
									<tr key={hotel.id}>
										<th scope='row'>{hotel.id}</th>
										<td>{hotel.attributes.title}</td>
										<td>
											{hotel.attributes.city}, {hotel.attributes.country}
										</td>
										<td>
											<Link href={`/hotels/${hotel.id}`}>
												<AdminFunctionalityLink>View</AdminFunctionalityLink>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</AdminHotelsTable>
					</AdminHotelsTableContainer>

					<AdminReturnButtonWrapper>
						<AdminReturnButton primary onClick={AdminReturnToDashboardHandle}>
							Go Back To Dashboard
						</AdminReturnButton>
					</AdminReturnButtonWrapper>
				</AdminHotelLocationsContainer>
			</Page>
		</>
	);
}

export async function getStaticProps() {
	const res = await axios.get(`${BASE_URL}/api/hotels`);
	const hotels = res.data.data;

	return {
		props: {
			hotels: res.data.data,
		},
	};
}

export default Hotellocations;
