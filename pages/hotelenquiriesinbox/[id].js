import Page from '../../components/page/Page';
import { BASE_URL } from '../../configs/configs';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
	SpecificEnquiryContentContainer,
	SpecificEnquiryDataContainer,
	SpecificEnquiryDataRow,
	SpecificEnquiryEmptyRow,
	SpecificEnquiryDataFullRow,
} from '../../components/admin/hotelenquiriesinbox/SpecificHotelEnquiryElements';
import {
	AdminTitle,
	AdminReturnButtonWrapper,
	AdminReturnButton,
	AdminButton,
} from '../../components/admin/global/GlobalElements';
import { BookYourStayCheckBoxes } from '../../components/bookyourstay/BookYourStayElements';

export default function SpecificHotelEnquiry({ enquiriesData }) {
	console.log(enquiriesData);

	useEffect(() => {
		if (localStorage.getItem('jwt') === null) {
			window.location.href = './login';
		}
	}, []);

	const Router = useRouter();

	function AdminReturnToInboxHandle(event) {
		event.preventDefault();
		Router.push('/hotelenquiriesinbox');
	}

	return (
		<>
			<Page title='Specific Hotel Enquiry'>
				<SpecificEnquiryContentContainer>
					<AdminTitle>Booking Enquiry</AdminTitle>

					<SpecificEnquiryDataContainer>
						<SpecificEnquiryDataRow>
							<h5 className='inner-content-padding-sm-btm'>
								Enquiry #{enquiriesData.id}
							</h5>
						</SpecificEnquiryDataRow>
						<SpecificEnquiryDataRow></SpecificEnquiryDataRow>
						<SpecificEnquiryDataRow>
							<h6 className='inner-content-padding-sm-btm'>
								Booking Name: {enquiriesData.attributes.firstname}{' '}
								{enquiriesData.attributes.lastname}
							</h6>
						</SpecificEnquiryDataRow>
						<SpecificEnquiryDataRow>
							<h6 className='inner-content-padding-sm-btm'>
								Enquiry Created Date: {enquiriesData.attributes.createdAt}
							</h6>
						</SpecificEnquiryDataRow>
						<SpecificEnquiryDataRow>
							<h6 className='inner-content-padding-sm-btm'>
								Email Address: {enquiriesData.attributes.emailaddress}
							</h6>
						</SpecificEnquiryDataRow>
						<SpecificEnquiryDataRow>
							<h6 className='inner-content-padding-sm-btm'>
								Street Address: {enquiriesData.attributes.streetaddress}
							</h6>
						</SpecificEnquiryDataRow>
						<SpecificEnquiryDataRow>
							<h6 className='inner-content-padding-sm-btm'>
								City, Country: {enquiriesData.attributes.city},{' '}
								{enquiriesData.attributes.country}
							</h6>
						</SpecificEnquiryDataRow>
						<SpecificEnquiryDataRow>
							<h6 className='inner-content-padding-sm-btm'>
								Zip Code: {enquiriesData.attributes.zipcode}
							</h6>
						</SpecificEnquiryDataRow>
						<SpecificEnquiryEmptyRow />

						<SpecificEnquiryDataRow>
							<h6 className='inner-content-padding-sm-top inner-content-padding-sm-btm'>
								Booking Dates: July 01 2022 - July 02 2022
							</h6>
						</SpecificEnquiryDataRow>
						<SpecificEnquiryDataFullRow>
							<h6 className='inner-content-padding-sm-btm'>PAX: 2 Guests</h6>
						</SpecificEnquiryDataFullRow>
						<SpecificEnquiryDataFullRow>
							<h6 className='inner-content-padding-sm-btm'>
								Room: {enquiriesData.attributes.roomtype}
							</h6>
						</SpecificEnquiryDataFullRow>
						<SpecificEnquiryDataFullRow>
							<h6 className='inner-content-padding-sm-btm'>
								Bed: {enquiriesData.attributes.bedoptions}
							</h6>
						</SpecificEnquiryDataFullRow>
						<SpecificEnquiryDataFullRow>
							<h6 className='inner-content-padding-sm-btm'>
								Requests: {enquiriesData.attributes.specialrequests}
							</h6>
						</SpecificEnquiryDataFullRow>
						<SpecificEnquiryDataFullRow>
							<h6 className='inner-content-padding-sm-btm'>
								Late Check Out: {`${enquiriesData.attributes.latecheckout}`}
							</h6>
						</SpecificEnquiryDataFullRow>
						<SpecificEnquiryDataFullRow>
							<h6 className='inner-content-padding-sm-btm'>
								Bottle of Champagne: {`${enquiriesData.attributes.champagne}`}
							</h6>
						</SpecificEnquiryDataFullRow>
						<SpecificEnquiryDataFullRow>
							<h6>Parking: {`${enquiriesData.attributes.parking}`}</h6>
						</SpecificEnquiryDataFullRow>
					</SpecificEnquiryDataContainer>

					<AdminReturnButtonWrapper>
						<AdminReturnButton primary onClick={AdminReturnToInboxHandle}>
							Go Back To Inbox
						</AdminReturnButton>
					</AdminReturnButtonWrapper>
				</SpecificEnquiryContentContainer>
			</Page>
		</>
	);
}

export async function getStaticPaths() {
	const res = await axios.get(`${BASE_URL}/api/hotel-enquiries`);
	const enquiries = res.data.data;
	const paths = enquiries.map((enquiry) => {
		return {
			params: {
				id: enquiry.id.toString(),
			},
		};
	});
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await axios.get(`${BASE_URL}/api/hotel-enquiries/${params.id}`);

	const enquiriesData = res.data.data;
	return { props: { enquiriesData } };
}
