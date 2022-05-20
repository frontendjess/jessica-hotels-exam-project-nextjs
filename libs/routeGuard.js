import { getUser } from './localStorageHelpers';

if (getUser('jwt') === null) {
	window.location.href = '/login.js';
}
