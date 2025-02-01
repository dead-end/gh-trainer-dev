import { githubGetUrl, githubReadContent } from '$lib/github';
import { githubConfig } from '$lib/models/github.svelte';
import type { TBook } from '$lib/types';

export const bookListing = async () => {
	const url = githubGetUrl(githubConfig.user, githubConfig.repo, 'books/listing.books.json');
	const data = await githubReadContent(url, githubConfig.token);
	const books: TBook[] = JSON.parse(data.content);
	return books;
};
