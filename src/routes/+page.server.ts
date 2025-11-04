import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		seo: {
			title: 'Pandev - Community of Filipino Software Developers',
			description: 'Pandev - A Community of Filipino Software Developers. Where the fun tech talks take place.',
			url: 'https://pandesal.dev/',
		}
	};
};