import { dbPromise } from '$lib/db/db';
import { storeGet, storePut } from '$lib/db/store';
import type { TGithubConfig } from '$lib/types';

const KEY = 'github';

const DEFAULT: TGithubConfig = {
	id: KEY,
	user: '',
	repo: '',
	token: ''
};

export const githubConfig: TGithubConfig = $state(DEFAULT);

const storeWrite = (user: string, repo: string, token: string) => {
	githubConfig.user = user;
	githubConfig.repo = repo;
	githubConfig.token = token;
};

const dbWrite = async (config: TGithubConfig) => {
	const store = (await dbPromise).transaction(['admin'], 'readwrite').objectStore('admin');
	storePut(store, $state.snapshot(config));
};

const dbRead = async () => {
	const store = (await dbPromise).transaction(['admin'], 'readwrite').objectStore('admin');
	return await storeGet<TGithubConfig>(store, KEY);
};

export const githubInitConfig = async (): Promise<TGithubConfig> => {
	const config = await dbRead();
	if (config) {
		storeWrite(config.user, config.repo, config.token);
	} else {
		dbWrite(githubConfig);
	}

	return githubConfig;
};

export const githubSetConfig = (user: string, repo: string, token: string) => {
	storeWrite(user, repo, token);
	dbWrite(githubConfig);
	return githubConfig;
};

export const githubIsConfigValid = () => {
	return githubConfig.user && githubConfig.repo && githubConfig.token;
};
