import axios from 'axios';

export async function fetchJson(url, options) {
	try {
		const response = await axios.get(url, options);
		console.log(response.data);
	} catch (err) {
		console.error(err);
	}
}
