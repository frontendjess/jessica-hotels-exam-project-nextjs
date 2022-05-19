import axios from 'axios';
import { BASE_URL } from '../../configs/configs';

async function handleUser(req, res) {
	const { jwt } = req.cookies;
	if (!jwt) {
		res.status(401).end();
		return;
	}
	try {
		const user = await axios.get(`${BASE_URL}/users/me`, {
			headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
		});
		res.status(200).json({
			id: user.id,
			username: user.username,
		});
	} catch (error) {
		res.status(401).end();
	}
}

export default handleUser;
