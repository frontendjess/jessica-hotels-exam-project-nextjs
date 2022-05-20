import Page from '../components/page/Page';
import { LogoutContainer } from '../components/logout/LogoutElements';
export default function Logout() {
	return (
		<>
			<Page title='Admin Logged Out'>
				<LogoutContainer>
					<h1>You are logged out</h1>
				</LogoutContainer>
			</Page>
		</>
	);
}
