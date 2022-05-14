import { useState } from 'react';
import axios from 'axios';
import Page from '../components/page/Page';
import LoginContainer from '../components/login/LoginElements';

export default function AdminLogin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		axios
			.post('http://localhost:1337/api/auth/local', {
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
			});
	};

	return (
		<>
			<Page title='Admin login'>
				<LoginContainer>
					<form onSubmit={handleSubmit}>
						<label label='Email'>
							Email
							<input
								type='email'
								required
								value={email}
								onChange={(event) => setEmail(event.target.value)}
							/>
						</label>
						<label label='Password'>
							Password
							<input
								type='password'
								required
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</label>
						<button type='submit'>Sign In</button>
					</form>
				</LoginContainer>
			</Page>
		</>
	);
}
