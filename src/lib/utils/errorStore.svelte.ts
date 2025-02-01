const defaultError: string[] = [];

export const errorStore = $state(defaultError);

export const errorReset = () => {
	errorStore.splice(0, errorStore.length);
};

export const errorAdd = (error: string) => {
	errorStore.push(error);
};
