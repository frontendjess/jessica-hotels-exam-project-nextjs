import {
	ContactUsColLeft,
	ContactUsColRight,
	ContactUsContainer,
	ContactUsTitle,
	ContactEnquiryContainer,
	ContactEnquiryTitle,
	ContactEnquiryRow,
	ContactEnquiryCol,
	ContactEnquiryInput,
	ContactEnquiryTextArea,
	ContactEnquiryButton,
} from '../components/contactus/ContactUsElements';
import Page from '../components/page/Page';
import { useRouter } from 'next/router';
import axios from 'axios';
import { BASE_URL } from '../configs/configs';
import { useState } from 'react';

function ContactUs() {
	const Router = useRouter();
	function SendEnquiryHandle(event) {
		event.preventDefault();
		Router.push('/enquirysent');
	}

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [bookingNumber, setBookingNumber] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		let newMessage = {
			firstname: firstName,
			lastname: lastName,
			bookingnumber: bookingNumber,
			phonenumber: phoneNumber,
			email: emailAddress,
			message: message,
		};

		axios({
			method: 'post',
			url: `${BASE_URL}/api/general-enquiries`,
			data: {
				data: {
					...newMessage,
				},
			},
		})
			.then((response) => {
				if (response.status === 200) {
					console.log('response', response);
					console.log(newMessage);
				} else {
					console.log('then error');
				}
			})
			.catch((err) => {
				// console.log('catch error', err.response.data.error);
				console.log('catch error', err);
			});
	};

	return (
		<>
			<Page title='Contact Us'>
				<ContactUsContainer>
					<ContactUsColLeft>
						<ContactUsTitle>Contact Us_</ContactUsTitle>
					</ContactUsColLeft>
					<ContactUsColRight>
						<form onSubmit={(event) => handleSubmit(event)}>
							<ContactEnquiryContainer>
								<ContactEnquiryTitle>
									We will get back to you asap!
								</ContactEnquiryTitle>

								<ContactEnquiryRow>
									<ContactEnquiryCol>
										<ContactEnquiryInput
											type='text'
											placeholder='First Name'
											onChange={(event) => setFirstName(event.target.value)}
										/>
									</ContactEnquiryCol>
									<ContactEnquiryCol>
										<ContactEnquiryInput
											type='text'
											placeholder='Last Name'
											onChange={(event) => setLastName(event.target.value)}
										/>
									</ContactEnquiryCol>
								</ContactEnquiryRow>
								<ContactEnquiryRow>
									<ContactEnquiryCol>
										<ContactEnquiryInput
											type='text'
											placeholder='Booking Number'
											onChange={(event) => setBookingNumber(event.target.value)}
										/>
									</ContactEnquiryCol>
									<ContactEnquiryCol>
										<ContactEnquiryInput
											type='text'
											placeholder='Phone Number'
											onChange={(event) => setPhoneNumber(event.target.value)}
										/>
									</ContactEnquiryCol>
								</ContactEnquiryRow>
								<ContactEnquiryRow>
									<ContactEnquiryCol>
										<ContactEnquiryInput
											type='text'
											placeholder='Email Address'
											onChange={(event) => setEmailAddress(event.target.value)}
										/>
									</ContactEnquiryCol>
								</ContactEnquiryRow>
								<ContactEnquiryRow>
									<ContactEnquiryCol>
										<ContactEnquiryTextArea
											type='textarea'
											placeholder='Please tell us what you need...'
											rows='1'
											onChange={(event) => setMessage(event.target.value)}
										/>
									</ContactEnquiryCol>
								</ContactEnquiryRow>

								<div className='inner-content-padding-top'>
									<ContactEnquiryButton primary type='submit'>
										Send Message
									</ContactEnquiryButton>
								</div>
							</ContactEnquiryContainer>
						</form>
					</ContactUsColRight>
				</ContactUsContainer>
			</Page>
		</>
	);
}

export default ContactUs;
