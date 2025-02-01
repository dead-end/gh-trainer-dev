import { githubGetUrl, githubReadContent } from '$lib/github';
import { githubConfig, githubIsConfigValid } from '$lib/models/github.svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	console.log('PageLoad');

	if (githubIsConfigValid()) {
		const url = githubGetUrl(githubConfig.user, githubConfig.repo, 'README.md');
		const data = await githubReadContent(url, githubConfig.token);

		return {
			status: 'ok',
			content: data.content,
			hash: data.hash
		};
	}

	return {
		status: 'error',
		content: '',
		hash: ''
	};
};
