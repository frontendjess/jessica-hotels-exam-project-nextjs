import Page from '../components/page/Page';
import {
	AdminHotelLocationsContainer,
	AdminAddNewLocationLink,
	AdminHotelsTableContainer,
} from '../components/admin/hotellocations/HotelLocationsElements';
import {
	AdminReturnButton,
	AdminReturnButtonWrapper,
	AdminTitle,
} from '../components/admin/global/GlobalElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Hotellocations() {
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
						{' '}
						<tr>
							<th scope='row'>id</th>
							<td>image</td>
							<td>title</td>
							<td>
								<a href='edit-a-product.html?id=${id}'>edit</a>
							</td>
						</tr>
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

export default Hotellocations;
