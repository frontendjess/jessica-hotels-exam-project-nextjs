import Page from '../components/page/Page';
import AddHotelPage from '../components/admin/addhotel/AddHotel';

function Addhotel() {
	return (
		<>
			<Page title='Admin - Add a New Hotel Location'>
				<AddHotelPage />
			</Page>
		</>
	);
}

export default Addhotel;
