import Page from '../../components/page/Page';
import { BASE_URL } from '../../configs/configs';
import axios from 'axios';
import {
	GeneralInboxContainer,
	GeneralInboxTableContainer,
	GeneralInboxTable,
	GeneralInboxTableHeadings,
} from '../../components/admin/generalinbox/GeneralInboxElements';
import {
	AdminTitle,
	AdminFunctionalityLink,
	AdminReturnButtonWrapper,
	AdminReturnButton,
} from '../../components/admin/global/GlobalElements';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function GeneralInbox({ enquiries }) {
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
			<Page title='General Enquiries Inbox'>
				<GeneralInboxContainer>
					<AdminTitle>General Enquiries Inbox</AdminTitle>

					<GeneralInboxTableContainer>
						<GeneralInboxTable>
							<thead>
								<tr>
									<th scope='row'>
										<GeneralInboxTableHeadings>
											Message #
										</GeneralInboxTableHeadings>
									</th>
									<td>
										<GeneralInboxTableHeadings>From</GeneralInboxTableHeadings>
									</td>
									<td>
										<GeneralInboxTableHeadings>Email</GeneralInboxTableHeadings>
									</td>
									<td>
										<GeneralInboxTableHeadings>
											Message
										</GeneralInboxTableHeadings>
									</td>
									<td>
										{' '}
										<GeneralInboxTableHeadings>
											Respond
										</GeneralInboxTableHeadings>
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
										<td>{enquiry.attributes.email}</td>
										<td>{enquiry.attributes.message}</td>
										<td>
											<Link href='mailto:'>
												<AdminFunctionalityLink>Open</AdminFunctionalityLink>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</GeneralInboxTable>
					</GeneralInboxTableContainer>

					<AdminReturnButtonWrapper>
						<AdminReturnButton primary onClick={AdminReturnToDashboardHandle}>
							Go Back To Dashboard
						</AdminReturnButton>
					</AdminReturnButtonWrapper>
				</GeneralInboxContainer>
			</Page>
		</>
	);
}

export async function getServerSideProps() {
	const res = await axios.get(`${BASE_URL}/api/general-enquiries`);
	const enquiries = res.data.data;

	return {
		props: {
			enquiries: res.data.data,
		},
	};
}

export default GeneralInbox;
