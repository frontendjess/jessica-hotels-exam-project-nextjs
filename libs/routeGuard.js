import { getUser } from './localStorageHelpers';
import { useRouter } from 'next/router';

function RouteGuardPage() {
	const Router = useRouter();
	if (getUser('jwt') === null) {
		Router.push('/login');
	}
}

export default RouteGuardPage;
