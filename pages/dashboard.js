import {
	AdminDashboardContainer,
	AdminDashboardFunctionalitiesContainer,
	AdminDashboardFunctionalitiesCol,
} from '../components/admin/dashboard/DashboardElements';
import {
	AdminReturnButton,
	AdminTitle,
} from '../components/admin/global/GlobalElements';
import Page from '../components/page/Page';
import { useRouter } from 'next/router';

function Dashboard() {
	const Router = useRouter();
	function AdminToGeneralInboxHandle(event) {
		event.preventDefault();
		Router.push('/generalinbox');
	}

	function AdminToHotelEnquiriesInboxHandle(event) {
		event.preventDefault();
		Router.push('/hotelsenquiriesinbox');
	}

	function AdminToHotelLocationsHandle(event) {
		event.preventDefault();
		Router.push('/hotellocations');
	}
	return (
		<>
			<Page title='Admin Dashboard'>
				<AdminDashboardContainer>
					<AdminTitle>Admin Dashboard</AdminTitle>
					<AdminDashboardFunctionalitiesContainer>
						<AdminDashboardFunctionalitiesCol>
							<AdminReturnButton primary>General Inbox</AdminReturnButton>
						</AdminDashboardFunctionalitiesCol>
						<AdminDashboardFunctionalitiesCol>
							<AdminReturnButton primary>
								Hotels Enquiries Inbox
							</AdminReturnButton>
						</AdminDashboardFunctionalitiesCol>
						<AdminDashboardFunctionalitiesCol>
							<AdminReturnButton primary onClick={AdminToHotelLocationsHandle}>
								Edit / Add Hotel Locations
							</AdminReturnButton>
						</AdminDashboardFunctionalitiesCol>
					</AdminDashboardFunctionalitiesContainer>
				</AdminDashboardContainer>
			</Page>
		</>
	);
}

export default Dashboard;
