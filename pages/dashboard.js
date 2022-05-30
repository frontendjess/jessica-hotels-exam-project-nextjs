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
import { useEffect } from 'react';

function Dashboard() {
	useEffect(() => {
		if (localStorage.getItem('jwt') === null) {
			window.location.href = './login';
		}
	}, []);

	const Router = useRouter();
	function AdminToGeneralInboxHandle(event) {
		event.preventDefault();
		Router.push('/generalinbox');
	}

	function AdminToHotelEnquiriesInboxHandle(event) {
		event.preventDefault();
		Router.push('/hotelenquiriesinbox');
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
							<AdminReturnButton primary onClick={AdminToGeneralInboxHandle}>
								General Enquiries Inbox
							</AdminReturnButton>
						</AdminDashboardFunctionalitiesCol>
						<AdminDashboardFunctionalitiesCol>
							<AdminReturnButton
								primary
								onClick={AdminToHotelEnquiriesInboxHandle}>
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
