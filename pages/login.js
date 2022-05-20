import { useState } from 'react';
import axios from 'axios';
import Page from '../components/page/Page';
import {
	LoginContainer,
	LoginAlertContainer,
	LoginForm,
	LoginFormRow,
	LoginFormInput,
	LoginFormButton,
} from '../components/login/LoginElements';
import { BASE_URL } from '../configs/configs';

export default function AdminLogin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		axios
			.post(`${BASE_URL}/api/auth/local`, {
				identifier: email,
				password,
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res.data);
					localStorage.setItem('jwt', res.data.jwt);
					localStorage.setItem('user', JSON.stringify(res.data.user));
					window.location = '/dashboard';
				} else {
					console.log(res.data.error);
				}
			})
			.catch((err) => {
				console.log(err.response.data.error);
				alert('Invalid email address or password');
			});
	};

	return (
		<>
			<Page title='Admin login'>
				<LoginContainer>
					<h1>Admin Login</h1>
					<LoginForm>
						<form onSubmit={handleSubmit}>
							<LoginFormRow>
								<LoginFormInput
									type='email'
									name='email'
									id='email'
									placeholder='Email'
									required
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
							</LoginFormRow>
							<LoginFormRow>
								<LoginFormInput
									type='password'
									name='password'
									id='password'
									placeholder='Password'
									required
									value={password}
									onChange={(event) => setPassword(event.target.value)}
								/>
							</LoginFormRow>
							<LoginFormRow>
								<LoginFormButton primary type='submit'>
									Sign In
								</LoginFormButton>
							</LoginFormRow>
							<LoginAlertContainer>
								<p>Forgot your password?</p>
							</LoginAlertContainer>
						</form>
					</LoginForm>
				</LoginContainer>
			</Page>
		</>
	);
}
