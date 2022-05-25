import Page from '../components/page/Page';
import { AdminHotelLocationsContainer } from '../components/admin/hotellocations/HotelLocationsElements';

function Hotellocations() {
	return (
		<>
			<Page title='Admin - Hotel Locations'>
				<AdminHotelLocationsContainer>
					<h1>All Hotel Locations</h1>
				</AdminHotelLocationsContainer>
			</Page>
		</>
	);
}

export default Hotellocations;
