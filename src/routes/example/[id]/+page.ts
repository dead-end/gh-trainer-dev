import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const url = `https://raw.githubusercontent.com/dead-end/cards-russian/master/data/book/chap-${params.id}/chunk-1.json`;
	const res = await fetch(url);
	const json = await res.json();
	console.log('json', json);
	return {
		post: {
			status: 'ok'
		}
	};
};
