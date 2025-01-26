import type { TGithubConfig } from '$lib/types';

const KEY = 'github-config';

const DEFAULT: TGithubConfig = {
	user: '',
	repo: '',
	token: ''
};

export const githubConfig: TGithubConfig = $state(DEFAULT);

export const githubInitConfig = (): TGithubConfig => {
	const str = localStorage.getItem(KEY);
	if (str == null) {
		return DEFAULT;
	}
	return JSON.parse(str);
};

export const githubSetConfig = (user: string, repo: string, token: string) => {
	githubConfig.user = user;
	githubConfig.repo = repo;
	githubConfig.token = token;

	localStorage.setItem(KEY, JSON.stringify(githubConfig));
};

export const githubIsConfigValid = () => {
	return githubConfig.user && githubConfig.repo && githubConfig.token;
};
