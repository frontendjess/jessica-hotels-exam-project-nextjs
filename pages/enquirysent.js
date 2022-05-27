import Page from '../components/page/Page';
import {
	EnquirySentContainer,
	EnquirySentTitle,
} from '../components/enquirysent/EnquirySentElements';

function EnquirySent() {
	return (
		<>
			<Page title='Your message has been sent!'>
				<EnquirySentContainer>
					<EnquirySentTitle>
						Thank you! We will get back to you as soon as possible! :)
					</EnquirySentTitle>
				</EnquirySentContainer>
			</Page>
		</>
	);
}

export default EnquirySent;
