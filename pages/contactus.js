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

function ContactUs() {
	return (
		<>
			<Page title='Contact Us'>
				<ContactUsContainer>
					<ContactUsColLeft>
						<ContactUsTitle>Contact Us_</ContactUsTitle>
					</ContactUsColLeft>
					<ContactUsColRight>
						<form>
							<ContactEnquiryContainer>
								<ContactEnquiryTitle>
									We will get back to you asap!
								</ContactEnquiryTitle>

								<ContactEnquiryRow>
									<ContactEnquiryCol>
										<ContactEnquiryInput placeholder='First Name' />
									</ContactEnquiryCol>
									<ContactEnquiryCol>
										<ContactEnquiryInput placeholder='Last Name' />
									</ContactEnquiryCol>
								</ContactEnquiryRow>
								<ContactEnquiryRow>
									<ContactEnquiryCol>
										<ContactEnquiryInput placeholder='Booking Number' />
									</ContactEnquiryCol>
									<ContactEnquiryCol>
										<ContactEnquiryInput placeholder='Phone Number' />
									</ContactEnquiryCol>
								</ContactEnquiryRow>
								<ContactEnquiryRow>
									<ContactEnquiryCol>
										<ContactEnquiryInput placeholder='Email Address' />
									</ContactEnquiryCol>
								</ContactEnquiryRow>
								<ContactEnquiryRow>
									<ContactEnquiryCol>
										<ContactEnquiryTextArea
											placeholder='Please tell us what you need...'
											rows='1'
										/>
									</ContactEnquiryCol>
								</ContactEnquiryRow>

								<div className='inner-content-padding-top'>
									<ContactEnquiryButton primary>
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
