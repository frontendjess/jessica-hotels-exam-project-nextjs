import Page from '../components/page/Page';
import {
	ConfirmationHeroContainer,
	ConfirmationHeroTitle,
} from '../components/confirmation/ConfirmationElements';

function Confirmation() {
	return (
		<>
			<Page title='Booking Confirmation'>
				<ConfirmationHeroContainer>
					<ConfirmationHeroTitle>See you soon!</ConfirmationHeroTitle>
				</ConfirmationHeroContainer>
			</Page>
		</>
	);
}

export default Confirmation;
