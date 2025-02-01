import { githubGetUrl, githubReadContent } from '$lib/github';
import { githubConfig, githubIsConfigValid } from '$lib/models/github.svelte';
import { bookListing } from '$lib/models/book';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		books: await bookListing()
	};
};
