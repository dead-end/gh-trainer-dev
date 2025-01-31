import type { TGithubConfig } from '$lib/types';

const KEY = 'github-config';

const DEFAULT: TGithubConfig = {
	user: '',
	repo: '',
	token: ''
};

export const githubConfig: TGithubConfig = $state(DEFAULT);

let isInit = false;

const setConfig = (user: string, repo: string, token: string) => {
	githubConfig.user = user;
	githubConfig.repo = repo;
	githubConfig.token = token;
};

const saveConfig = (config: TGithubConfig) => {
	localStorage.setItem(KEY, JSON.stringify(config));
};

export const githubInitConfig = (): TGithubConfig => {
	const str = localStorage.getItem(KEY);
	const config = str === null ? DEFAULT : JSON.parse(str);
	setConfig(config.user, config.repo, config.token);
	if (str === null) {
		saveConfig(githubConfig);
	}

	isInit = true;
	return githubConfig;
};

export const githubSetConfig = (user: string, repo: string, token: string) => {
	setConfig(user, repo, token);
	saveConfig(githubConfig);
	return githubConfig;
};

export const githubIsConfigValid = () => {
	//if (!isInit) {
	//	githubInitConfig();
	//}
	return githubConfig.user && githubConfig.repo && githubConfig.token;
};
