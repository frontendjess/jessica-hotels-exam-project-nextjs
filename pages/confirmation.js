import Page from '../components/page/Page';
import {
	ConfirmationContentContainer,
	ConfirmationHeroContainer,
	ConfirmationHeroTitle,
	Signature,
	ContactLink,
} from '../components/confirmation/ConfirmationElements';
import Link from 'next/link';

function Confirmation() {
	return (
		<>
			<Page title='Booking Confirmation'>
				<ConfirmationHeroContainer>
					<ConfirmationHeroTitle>See you soon!</ConfirmationHeroTitle>
				</ConfirmationHeroContainer>

				<ConfirmationContentContainer>
					<h5>Your Reservation Confirmation</h5>
					<p className='inner-content-padding-sm-top'>
						Thank you for choosing to stay at one of our Holidaze locations.
						Once one of our agents have looked over your enquiry, we will send
						you a confirmation email with all the details! See you soon. Please
						don&apos;t hesitate to{' '}
						<Link href='/contactus'>
							<ContactLink>contact us</ContactLink>
						</Link>{' '}
						if you need to make a change.{' '}
					</p>

					<Signature className='inner-content-padding-top'>
						<h3>xoxo Holidaze</h3>
					</Signature>
				</ConfirmationContentContainer>
			</Page>
		</>
	);
}

export default Confirmation;
