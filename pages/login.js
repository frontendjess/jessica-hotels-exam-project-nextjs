import axios from 'axios';
import Page from '../components/page/Page';
import LoginContainer from '../components/login/LoginElements';

export default function AdminLogin() {
	return (
		<>
			<Page title='Admin login'>
				<LoginContainer>
					<form>
						<label>
							Email
							<input type='email' />
						</label>
						<label>
							Password
							<input type='password' />
						</label>
						<button type='submit'>Sign In</button>
					</form>
				</LoginContainer>
			</Page>
		</>
	);
}
