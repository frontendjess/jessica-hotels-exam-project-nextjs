import Page from '../../components/page/Page';
import { BASE_URL } from '../../configs/configs';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
	HotelEnquiriesInboxContainer,
	HotelEnquiriesInboxTable,
	HotelEnquiriesInboxTableContainer,
	HotelEnquiriesInboxTableHeadings,
	HotelEnquiriesInboxStatusOpen,
	HotelEnquiriesInboxStatusClosed,
} from '../../components/admin/hotelenquiriesinbox/HotelEnquiriesInboxElements';
import {
	AdminReturnButton,
	AdminReturnButtonWrapper,
	AdminTitle,
} from '../../components/admin/global/GlobalElements';

function HotelEnquiriesInbox({ enquiries }) {
	useEffect(() => {
		if (localStorage.getItem('jwt') === null) {
			window.location.href = './login';
		}
	}, []);

	const Router = useRouter();

	function AdminReturnToDashboardHandle() {
		event.preventDefault();
		Router.push('/dashboard');
	}

	return (
		<>
			<Page title='Hotel Enquiries Inbox'>
				<HotelEnquiriesInboxContainer>
					<AdminTitle>Hotel Enquiries Inbox</AdminTitle>

					<HotelEnquiriesInboxTableContainer>
						<HotelEnquiriesInboxTable>
							<thead>
								<tr>
									<th scope='row'>
										<HotelEnquiriesInboxTableHeadings>
											Booking Enquiry #
										</HotelEnquiriesInboxTableHeadings>
									</th>
									<td>
										<HotelEnquiriesInboxTableHeadings>
											Name
										</HotelEnquiriesInboxTableHeadings>
									</td>
									<td>
										<HotelEnquiriesInboxTableHeadings>
											Request Is Open
										</HotelEnquiriesInboxTableHeadings>
									</td>
									<td>
										<HotelEnquiriesInboxTableHeadings>
											Admin
										</HotelEnquiriesInboxTableHeadings>
									</td>
								</tr>
							</thead>
							<tbody>
								{enquiries.map((enquiry) => (
									<tr key={enquiry.id}>
										<th scope='row'>{enquiry.id}</th>
										<td>
											{enquiry.attributes.firstname}{' '}
											{enquiry.attributes.lastname}
										</td>
										<td>{`${enquiry.attributes.status}`}</td>
										<td>
											<Link href={`/hotelenquiriesinbox/${enquiry.id}`}>
												<a>Open Enquiry</a>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</HotelEnquiriesInboxTable>
					</HotelEnquiriesInboxTableContainer>

					<AdminReturnButtonWrapper>
						<AdminReturnButton primary onClick={AdminReturnToDashboardHandle}>
							Go Back To Dashboard
						</AdminReturnButton>
					</AdminReturnButtonWrapper>
				</HotelEnquiriesInboxContainer>
			</Page>
		</>
	);
}

export async function getServerSideProps() {
	const res = await axios.get(`${BASE_URL}/api/hotel-enquiries`);
	const enquiries = res.data.data;

	return {
		props: {
			enquiries: res.data.data,
		},
	};
}

export default HotelEnquiriesInbox;
