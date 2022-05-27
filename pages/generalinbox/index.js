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
} from '../../components/admin/global/GlobalElements';

import Link from 'next/link';

function GeneralInbox({ enquiries }) {
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
										<GeneralInboxTableHeadings>
											Status
										</GeneralInboxTableHeadings>
									</td>
									<td>
										<GeneralInboxTableHeadings>
											Message
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
										<td>{enquiry.attributes.status}</td>
										<td>{enquiry.attributes.message}</td>
									</tr>
								))}
							</tbody>
						</GeneralInboxTable>
					</GeneralInboxTableContainer>
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
