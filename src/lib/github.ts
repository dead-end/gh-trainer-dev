/**
 * See: https://developer.mozilla.org/en-US/docs/Glossary/Base64
 */
const utf8_to_b64 = (str: string) => {
	return window.btoa(unescape(encodeURIComponent(str)));
};

/**
 * See: https://developer.mozilla.org/en-US/docs/Glossary/Base64
 */
const b64_to_utf8 = (str: string) => {
	return decodeURIComponent(escape(window.atob(str)));
};

export const githubGetUrl = (user: string, repo: string, path: string) => {
	return `https://api.github.com/repos/${user}/${repo}/contents/${path}`;
};

/**
 * The function reads a file from github. A token can be given optionally.
 */
export const githubReadContent = async (url: string, token: string) => {
	const headers: any = {
		Accept: 'application/vnd.github.v3+json'
	};

	if (token) {
		headers.authorization = `token ${token}`;
	}

	const response = await fetch(url, headers);
	if (!response.ok) {
		throw new Error(`Return code: ${response.status} - ${response.statusText}`);
	}

	const githubJson = await response.json();
	const content = b64_to_utf8(githubJson.content);

	return {
		content: content,
		hash: githubJson.sha
	};
};
