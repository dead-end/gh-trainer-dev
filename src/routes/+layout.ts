// @sveltejs/adapter-static: all routes must be fully prerenderable, but found the following routes that are dynamic:
export const prerender = false;
export const ssr = false;
export const csr = true;

import { githubInitConfig } from '$lib/github/config.svelte';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	githubInitConfig();
};
