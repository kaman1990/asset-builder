import posthog from 'posthog-js';
import { browser, dev } from '$app/environment';
import { PUBLIC_ORIGIN, PUBLIC_POSTHOG_KEY } from '$env/static/public';

export const load = async () => {
	if (browser && !dev) {
		posthog.init(
			'phc_477XVCmhdamgVYWSqLSXXMna3QkEj1CO0WbKsvfU6Uq',
			{
				api_host: 'https://eu.i.posthog.com',
				person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
			}
		)
	}
};
